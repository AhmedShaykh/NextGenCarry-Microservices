import { PradaController } from "./prada.controller";
import { Prada, PradaSchema } from "./prada.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { PradaService } from "./prada.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Prada.name, schema: PradaSchema }])
    ],
    controllers: [PradaController],
    providers: [PradaService]
})
export class PradaModule { };