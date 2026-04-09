import { PrismaModule } from "src/prisma/prisma.module";
import { ChanelController } from "./chanel.controller";
import { ChanelService } from "./chanel.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [ChanelController],
    providers: [ChanelService]
})
export class ChanelModule { };