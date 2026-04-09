import { PrismaModule } from "src/prisma/prisma.module";
import { GucciController } from "./gucci.controller";
import { GucciService } from "./gucci.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [GucciController],
    providers: [GucciService]
})
export class GucciModule { };