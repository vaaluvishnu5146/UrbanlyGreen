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