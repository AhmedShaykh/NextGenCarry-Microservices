import { CelineController } from "./celine.controller";
import { Celine, CelineSchema } from "./celine.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { CelineService } from "./celine.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Celine.name, schema: CelineSchema }])
    ],
    controllers: [CelineController],
    providers: [CelineService]
})
export class CelineModule { };