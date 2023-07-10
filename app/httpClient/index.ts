import { BaseAPIResponse } from './model';
import axios, { AxiosResponse } from 'axios';

// ** Config
import authConfig from '../configs/auth';

const storedToken = process.browser && window.localStorage.getItem(authConfig.storageTokenKeyName)!;

const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Authorization: storedToken
  }
});

clientInstance.interceptors.response.use(
  (response: AxiosResponse<BaseAPIResponse>) => response.data.data || response,
  error => Promise.reject(error.response?.data)
);

export const httpGet = (url: string, params?: object): Promise<any> =>
  new Promise((resolve, reject) => {
    clientInstance({
      method: 'GET',
      url,
      params
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });

export function setHttpToken(token: string) {
  console.log('token', token);
  clientInstance.defaults.headers['Authorization'] = token;
}

export function httpPost(url: string, data: unknown) {
  return new Promise<any>((resolve, reject) => {
    return clientInstance({
      method: 'POST',
      url,
      data
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function httpDelete(url: string) {
  return new Promise<any>((resolve, reject) => {
    return clientInstance({
      method: 'DELETE',
      url
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
