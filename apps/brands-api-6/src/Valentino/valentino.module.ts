import { Valentino, ValentinoSchema } from "./valentino.schema";
import { ValentinoController } from "./valentino.controller";
import { ValentinoService } from "./valentino.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Valentino.name, schema: ValentinoSchema }])
    ],
    controllers: [ValentinoController],
    providers: [ValentinoService]
})
export class ValentinoModule { };