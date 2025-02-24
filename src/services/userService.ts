import backendRequest from "../utils/auth";
import * as authService from "./auth-service";

export function findMe(){

    const headers = {
        Authorization : "Bearer " + authService.getAccessToken()
    }

    return backendRequest({url: "/users/me", headers});
}