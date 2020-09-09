import axios from "axios";
import apiConfig from "./api";


const request = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: 10000,
  headers: {}
});

request.interceptors.request.use(function (config) {
  // 请求拦截
});

request.interceptors.response.use(function(response) {
  // 响应拦截
});

export default request;
