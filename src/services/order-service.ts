import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/requests";

export function findByOrderId(id : number){

    const config : AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true
    }

    return backendRequest(config);
}