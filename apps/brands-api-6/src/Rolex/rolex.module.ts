import { RolexController } from "./rolex.controller";
import { Rolex, RolexSchema } from "./rolex.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { RolexService } from "./rolex.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Rolex.name, schema: RolexSchema }])
    ],
    controllers: [RolexController],
    providers: [RolexService]
})
export class RolexModule { };