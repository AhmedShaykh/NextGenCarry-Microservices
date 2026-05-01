import { PrismaModule } from "src/prisma/prisma.module";
import { LVController } from "./lv.controller";
import { LVServices } from "./lv.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [LVController],
    providers: [LVServices]
})
export class LVModule { };