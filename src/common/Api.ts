import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BOUNCE_IT_TOKEN_KEY } from '../Auth/auth.api';

export default class Api {
  private static axiosInstance: AxiosInstance;

  static async init() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL
    });

    this.addApiInterceptors();
  }

  private static addApiInterceptors() {
    this.axiosInstance.interceptors.request.use(request => {
      request.headers['authorization'] = `Bearer ${localStorage.getItem(BOUNCE_IT_TOKEN_KEY)}`
      return request;
    });

  }

  static get<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config);
  }
  static post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.post(url, data, config);
  }
  static request<T>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>(config);
  }

  static delete(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.delete(url, config);
  }

  private constructor() { }
}
