import { Product } from "./data.interface";

export interface ProductState {
    loading: boolean,
    data: Product[],
    error: boolean
}