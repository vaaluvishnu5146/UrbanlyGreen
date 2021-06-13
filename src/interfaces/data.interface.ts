import { Storage } from "@ionic/storage";
import { RouteComponentProps } from "react-router-dom";

export interface BaseData {
    _id?: string,
    _rev?: string
}

export interface Product extends BaseData {
    category?: string,
    deliveryMethod?: string,
    description?: string,
    name?: string,
    price?: number,
    quantity?: number,
    unitType?: string
}

export interface Services extends BaseData {
    address?: string,
    businessName?: string,
    contactEmail?: string,
    contactPhone?: number,
    freeInspection?: boolean,
    inspectionFee?: number,
    name?: string,
    pincode?: number,
    serviceType?: string
}