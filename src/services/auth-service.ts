import QueryString from "qs";
import { AccessTokenPayloadDTO, CredentialDTO, RoleEnum } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/requests.ts";
import * as accessTokenRepository from "../localstorage/access-token-repository.ts";
import jwtDecode from "jwt-decode";

export function loginRequest(loginData: CredentialDTO) {
  const header = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    headers: header,
    data: requestBody,
  };
  return backendRequest(config);
}

export function logout(): void {
  accessTokenRepository.remove();
}

export function saveAccessToken(token: string): void {
  accessTokenRepository.save(token);
}

export function getAccessToken(): string | null {
  return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
  try {
    const token = accessTokenRepository.get();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayloadDTO);
  } catch (error) {
    return undefined;
  }
}

export function isAuthenticated(): boolean {
  const tokenPayload = getAccessTokenPayload();
  return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {
  if (roles.length === 0) {
    return true;
  }
  const tokenPayload = getAccessTokenPayload();
  if (tokenPayload !== undefined) {
    return roles.some(role => tokenPayload.authorities.includes(role));
  }
  return false;
}
