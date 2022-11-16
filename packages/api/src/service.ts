import { getQueryParams } from "./helpers";
import { RequestBody, RequestParams, RequestPayload } from "./types";

export interface IAPIService {}

type ApiMethod = "get" | "post" | "put" | "patch" | "detele";
type ApiError = {
  message: string;
};

export class Api {
  baseUrl: string;

  private interceptors: Array<(request: RequestInit) => void>;
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl;
    this.interceptors = [];
  }

  private async request<T>(
    path: string,
    method: ApiMethod,
    payload?: RequestPayload,
    config: RequestInit = {}
  ) {
    try {
      const { params, body } = payload;
      const headers = new Headers({ ...config.headers });
      const searchQuery = getQueryParams(params);
      const url = this.getAPIUrl(path, searchQuery);
      const requestInit: RequestInit = {
        ...config,
        method,
      };

      this.interceptors.forEach((func) => func(requestInit));

      if (body instanceof FormData) {
        // handle form data
      } else {
        headers.set("Content-Type", "application/json");
        if (method === "post" || method === "put") {
          requestInit["body"] = JSON.stringify(body);
        }
      }

      const response = await fetch(url, {
        ...requestInit,
      });
      const data = await response.json();

      if (!response.ok) {
        const err: Error & { code?: number } = new Error(
          data?.message || data?.error
        );
        err.code = data?.code;
        throw err;
      }

      return {
        data: data as T,
        headers: response.headers,
        code: response.status,
      };
    } catch (e) {
      throw e as ApiError;
    }
  }

  addInterceptor(interceptor: (request: RequestInit) => void) {
    this.interceptors.push(interceptor);
    return this;
  }

  async get<T = any>(
    url: string,
    params?: RequestParams,
    config: RequestInit = {}
  ) {
    return this.request<T>(url, "get", params, config);
  }

  async post<T = any>(
    url: string,
    body: RequestBody,
    config: RequestInit = {}
  ) {
    return this.request<T>(url, "post", { body: body }, config);
  }

  async put<T = any>(url: string, body: RequestBody, config: RequestInit = {}) {
    return this.request<T>(url, "put", { body: body }, config);
  }

  async delete<T = any>(
    url: string,
    params: RequestParams,
    config: RequestInit = {}
  ) {
    return this.request<T>(url, "detele", { params }, config);
  }

  async patch<T = any>(
    url: string,
    body: RequestBody,
    config: RequestInit = {}
  ) {
    return this.request<T>(url, "patch", { body }, config);
  }

  private getAPIUrl(path: string, search?: string) {
    return this.baseUrl + "/" + path + search;
  }
}
