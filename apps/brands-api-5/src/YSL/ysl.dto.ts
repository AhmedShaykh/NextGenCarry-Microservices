import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { Category } from "./ysl.schema";

export class YSLDTO {
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