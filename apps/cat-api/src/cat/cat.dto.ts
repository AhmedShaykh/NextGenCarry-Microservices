import { IsString, IsNotEmpty, IsUrl } from "class-validator";

export class CATDTO {
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