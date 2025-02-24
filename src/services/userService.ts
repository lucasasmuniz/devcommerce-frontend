import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/auth";

export function findMe(){

    const config : AxiosRequestConfig = {
        url: "/users/me",
        withCredentials: true
    }

    return backendRequest(config);
}