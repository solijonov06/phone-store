import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  IphoneModelVariants,
  ProductStatus,
  ProductStorage,
  DeviceVariants,
} from "../libs/enums/product.enums";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productStorage:{
      type: Number,
      enum: ProductStorage,
      default: ProductStorage.HUNDRED_TWENTY_EIGHT,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    iphoneModelVariants: {
      type: String,
      enum: IphoneModelVariants,
      default: IphoneModelVariants.BASE,
    },

    deviceVariants: {
      type: String,
      enum: DeviceVariants,
      default: DeviceVariants.BASE,
    },

    productDesc: {
      type: String,
  
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } //updatedAt createdAt
);

productSchema.index(
  { productName: 1, iphoneModelVariants: 1, deviceVariants: 1,productStorage: 1  },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
