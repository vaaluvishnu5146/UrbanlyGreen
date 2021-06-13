import { Product, Services } from "./data.interface";

export interface BaseResponse {
    status?: number,
    error: boolean,
    errorMsg?: string
}

export interface ProductResponse extends BaseResponse {
    data: Product[]
}

export interface ServiceResponse extends BaseResponse {
    data: Services[]
}

export interface LoginResponse {
    email?: string,
    isAuthenticated?: boolean,
    name?: string,
    phone?: number,
    user_id?: string,
    error?: string
}