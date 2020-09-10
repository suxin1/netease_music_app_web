/**
 * Generic request with all the default headers required by the application.
 */

import axios from "axios";
import apiConfig from "../../config/api";


export const request = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

request.interceptors.request.use(function (config) {
  // 请求拦截
  return config;
});

request.interceptors.response.use(function(response) {
  // 响应拦截
  return response;
});