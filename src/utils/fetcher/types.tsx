import { AxiosError } from "axios";

export interface IFetchConfig {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  data?: any;
}

export interface IFetchResponse<T = any> {
  data?: T;
  error?: AxiosError;
}