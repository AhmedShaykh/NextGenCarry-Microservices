import { PrismaModule } from "src/prisma/prisma.module";
import { Module } from "@nestjs/common";
import { BrandController } from "./brand.controller";
import { BrandService } from "./brand.service";

@Module({
    imports: [PrismaModule],
    controllers: [BrandController],
    providers: [BrandService]
})
export class BrandModule { };