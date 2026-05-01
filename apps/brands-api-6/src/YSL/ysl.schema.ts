import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export enum Category {
    LUXURY_HANDBAGS = "LUXURY_HANDBAGS",
    SHOES_HEELS = "SHOES_HEELS",
    JEWELRY = "JEWELRY",
    CLOTHING = "CLOTHING",
    PURSE = "PURSE",
    WATCHES = "WATCHES",
    BELTS = "BELTS",
    SUNGLASSES = "SUNGLASSES",
    SUITCASE = "SUITCASE",
    JACKETS = "JACKETS"
};

export type YSLDocument = YSL & Document;

@Schema({
    timestamps: true
})
export class YSL {
    @Prop({
        required: true
    })
    title!: string;

    @Prop({
        required: true
    })
    desc!: string;

    @Prop({
        required: true,
        unique: true
    })
    imageUrl!: string;

    @Prop({
        type: String,
        enum: Category,
        required: true
    })
    category!: Category;
};

export const YSLSchema = SchemaFactory.createForClass(YSL);