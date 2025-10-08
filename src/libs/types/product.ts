import {} from "../../schema/Product.model";
import { ObjectId } from "mongoose";
import { DeviceVariants, IphoneModelVariants, ProductCollection, ProductStatus, ProductStorage } from "../enums/product.enums";


export interface Product{
    _id: ObjectId;
     productStatus: ProductStatus;
     productCollection: ProductCollection;
        productName: string;
        productPrice: number;
        productLeftCount: number;
        iphoneModelVariants: IphoneModelVariants;
        productStorage: ProductStorage;
        productImages: string[];
        productDesc?: string;
        deviceVariants: DeviceVariants;
        productViews: number;
        createdAt: Date;
        updated: Date;
}

export interface ProductInquiry{
        order: string;
        page: number;
        limit: number;
        productCollection?: ProductCollection;
        search?: string;
}


export interface ProductInput{
     productStatus?: ProductStatus;
     productCollection: ProductCollection;
        productName: string;
        productPrice: number;
        productLeftCount: number;
        iphoneModelVariants?: IphoneModelVariants;
        productStorage: ProductStorage;
        productImages: string[];
        productDesc?: string;
        deviceVariants: DeviceVariants;
        productViews?: number;
}

export interface ProductUpdateInput{
    _id: ObjectId;
     productStatus?: ProductStatus;
     productCollection?: ProductCollection;
        productName?: string;
        productPrice?: number;
        productLeftCount?: number;
        iphoneModelVariants?: IphoneModelVariants;
          productStorage: ProductStorage;
        productImages: string[];
        productDesc?: string;
        deviceVariants: DeviceVariants;
        productViews?: number;
}