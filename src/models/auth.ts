export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type CredentialDTO = {
    username:string,
    password:string
}

export type AccessTokenPayloadDTO = {
    exp: number,
    user_name: string,
    authorities: RoleEnum[]
}