import { IsString, IsNotEmpty, IsUrl } from "class-validator";

export class BrandDTO {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    desc: string;

    @IsUrl()
    @IsNotEmpty()
    imageUrl: string;
};