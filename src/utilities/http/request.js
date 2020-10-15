/**
 * Generic request with all the default headers required by the application.
 */
import axios from "axios";
import apiConfig from "../../config/api";

export const httpClient = axios.create({
  baseURL: apiConfig.apiRoot,
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(function (config) {
  // 请求拦截
  return config;
});

httpClient.interceptors.response.use(function (response) {
  // 响应拦截
  return response;
});
