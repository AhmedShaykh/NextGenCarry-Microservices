import { AdidasController } from "./adidas.controller";
import { Adidas, AdidasSchema } from "./adidas.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { AdidasService } from "./adidas.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Adidas.name, schema: AdidasSchema }])
    ],
    controllers: [AdidasController],
    providers: [AdidasService]
})
export class AdidasModule { };