import { PrismaModule } from "src/prisma/prisma.module";
import { NikeController } from "./nike.controller";
import { NikeService } from "./nike.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [NikeController],
    providers: [NikeService]
})
export class NikeModule { };