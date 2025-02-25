import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/requests";
import { OrderDTO } from "../models/order";

export function findByOrderId(id: number) {
  const config: AxiosRequestConfig = {
    url: `/orders/${id}`,
    withCredentials: true,
  };

  return backendRequest(config);
}

export function confirmOrderRequest(cart: OrderDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        withCredentials: true,
        url: "/orders",
        data: cart
    }
    return backendRequest(config);
}
