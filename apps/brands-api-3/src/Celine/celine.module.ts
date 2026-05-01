import { PrismaModule } from "src/prisma/prisma.module";
import { CelineController } from "./celine.controller";
import { CelineService } from "./celine.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [CelineController],
    providers: [CelineService]
})
export class CelineModule { };