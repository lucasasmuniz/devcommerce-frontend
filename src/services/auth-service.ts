import QueryString from "qs";
import { CredentialDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import backendRequest from "../utils/requests.ts";
import * as accessTokenRepository from '../localstorage/access-token-repository.ts';

export function loginRequest(loginData : CredentialDTO){

    const header = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const requestBody = QueryString.stringify({...loginData, grant_type: "password"});

    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        headers: header,
        data: requestBody,
        
    }
    return backendRequest(config);
}

export function logout() : void{
    accessTokenRepository.remove();
}

export function saveAccessToken(token : string) : void{
    accessTokenRepository.save(token);
}

export function getAccessToken() : string | null{ 
    return accessTokenRepository.get();
}

