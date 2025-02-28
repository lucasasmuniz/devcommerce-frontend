import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/requests";
import { ProductDTO } from "../models/product";

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
    withCredentials: true,
  };

  return backendRequest(config);
}

export function updateProduct(product: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/products/${product.id}`,
    withCredentials: true,
    data: product
  };

  return backendRequest(config);
}

export function saveProduct(product: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/products`,
    withCredentials: true,
    data:product
  };

  return backendRequest(config);
}
