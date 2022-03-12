import axios from "axios";
import { Toast } from "vant";

const config = require("./config");
const baseURL = config[process.env.NODE_ENV].baseUrl;

const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    debugger
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log("err" + error);
    Toast(error?.message || '');
    return Promise.reject(error);
  }
);

export default service;
