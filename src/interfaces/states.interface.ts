import { Product, Services } from "./data.interface";

export interface ProductState {
    loading: boolean,
    data: Product[],
    error: boolean
}

export interface ServiceState {
    loading: boolean,
    data: Services[],
    error: boolean
}