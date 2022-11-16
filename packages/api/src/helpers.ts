import { RequestParams } from "./types";

export const getQueryParams = (params?: RequestParams) => {
  if (!params) return "";
  return "?";
};
