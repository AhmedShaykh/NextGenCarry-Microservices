import { PrismaModule } from "src/prisma/prisma.module";
import { LVController } from "./lv.controller";
import { LVService } from "./lv.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [LVController],
    providers: [LVService]
})
export class LVModule { };