import { BalenciagaController } from "./balenciaga.controller";
import { BalenciagaService } from "./balenciaga.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [BalenciagaController],
    providers: [BalenciagaService]
})
export class BalenciagaModule { };