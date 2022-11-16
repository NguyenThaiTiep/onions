export interface RequestBody {
  [key: string]: any;
}
export interface RequestParams {
  [key: string]:
    | string
    | ReadonlyArray<string>
    | number
    | ReadonlyArray<number>
    | undefined;
}

export interface RequestPayload {
  body?: RequestBody;
  params?: RequestParams;
}
