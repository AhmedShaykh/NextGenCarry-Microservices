import { MongooseModule } from "@nestjs/mongoose";
import { YSLController } from "./ysl.controller";
import { YSL, YSLSchema } from "./ysl.schema";
import { YSLService } from "./ysl.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: YSL.name, schema: YSLSchema }])
    ],
    controllers: [YSLController],
    providers: [YSLService]
})
export class YSLModule { };