import { ProductStatus, ProductSize, ProductCollection } from "../../schema/Product.model";
import { ObjectId } from "mongoose";


export interface Product{
    _id: ObjectId;
     productStatus: ProductStatus;
     productCollection: ProductCollection;
        productName: string;
        productPrice: number;
        productLeftCount: number;
        productSize: ProductSize;
        productImages: string[];
        productDesc?: string;
        productVolume: number;
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
        productSize?: ProductSize;
        productImages: string[];
        productDesc?: string;
        productVolume?: number;
        productViews?: number;
}

export interface ProductUpdateInput{
    _id: ObjectId;
     productStatus?: ProductStatus;
     productCollection?: ProductCollection;
        productName?: string;
        productPrice?: number;
        productLeftCount?: number;
        productSize?: ProductSize;
        productImages: string[];
        productDesc?: string;
        productVolume?: number;
        productViews?: number;
}