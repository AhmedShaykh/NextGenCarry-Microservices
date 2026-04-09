import { PrismaModule } from "src/prisma/prisma.module";
import { DiorController } from "./dior.controller";
import { DiorService } from "./dior.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [DiorController],
    providers: [DiorService]
})
export class DiorModule { };