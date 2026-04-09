import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { Category } from "./valentino.schema";

export class ValentinoDTO {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    desc!: string;

    @IsString()
    @IsNotEmpty()
    imageUrl!: string;

    @IsEnum(Category)
    @IsNotEmpty()
    category!: Category;
};