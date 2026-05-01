import { HermesController } from "./hermes.controller";
import { Hermes, HermesSchema } from "./hermes.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { HermesService } from "./hermes.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Hermes.name, schema: HermesSchema }])
    ],
    controllers: [HermesController],
    providers: [HermesService]
})
export class HermesModule { };