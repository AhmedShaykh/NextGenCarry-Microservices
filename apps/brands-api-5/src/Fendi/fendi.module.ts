import { FendiController } from "./fendi.controller";
import { Fendi, FendiSchema } from "./fendi.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { FendiService } from "./fendi.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Fendi.name, schema: FendiSchema }])
    ],
    controllers: [FendiController],
    providers: [FendiService]
})
export class FendiModule { };