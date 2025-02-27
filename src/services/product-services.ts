import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/requests";

export function findPageRequest(
  page: number,
  name: string,
  size = 12,
  sort = "name"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/products",
    params: {
      page,
      name,
      size,
      sort,
    },
  };

  return backendRequest(config);
}

export function findById(id: number) {
  return backendRequest({ url: `/products/${id}`, method: "GET" });
}

export function deleteById(id: number) {
    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/products/${id}`,
        withCredentials: true
    }

    return backendRequest(config);
}
