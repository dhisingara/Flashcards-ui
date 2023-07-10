import { AxiosInstance } from 'axios';

export interface GenericObject {
  [key: string]: any;
}

export interface ErrorResponse {
  code: string;
  data: object;
  message: string;
  status: number;
  traceID: string;
}
export interface ReplayRequest {
  url: string;
  method: 'POST' | 'GET' | 'PUT';
  data: GenericObject;
}
export interface ErrorHandler {
  serverError: ErrorResponse;
  replayRequest: ReplayRequest;
  axiosInstance: AxiosInstance;
}
export interface BaseAPIResponse {
  code: string;
  message: string;
  data?: any;
  traceID: string;
}
