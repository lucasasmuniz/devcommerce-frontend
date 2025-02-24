import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system.ts";
import * as authService from "../services/auth-service.ts";
import { history } from "./history.ts";

export default function backendRequest(config: AxiosRequestConfig) {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken(),
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
  function (config) {
    // DO SOMETHING BEFORE REQUEST IS SENT
    return config;
  },
  function (error) {
    // DO SOMETHING WITH REQUEST ERROR
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
    return response;
  },
  function (error) {
    if(error.response.status === 401 || error.response.status === 403){
        history.push("/login");

    }
    if(error.response.status === 403){
        history.push("/catalog");

    }
    return Promise.reject(error);
  }
);
