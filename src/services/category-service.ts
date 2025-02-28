import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/requests";

export function findAll(){
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/categories"
    }
    return backendRequest(config);
}