import { PrismaModule } from "src/prisma/prisma.module";
import { PradaController } from "./prada.controller";
import { PradaService } from "./prada.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [PradaController],
    providers: [PradaService]
})
export class PradaModule { };