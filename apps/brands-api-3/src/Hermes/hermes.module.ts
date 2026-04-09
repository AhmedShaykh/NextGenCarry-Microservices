import { PrismaModule } from "src/prisma/prisma.module";
import { HermesController } from "./hermes.controller";
import { HermesService } from "./hermes.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [HermesController],
    providers: [HermesService]
})
export class HermesModule { };