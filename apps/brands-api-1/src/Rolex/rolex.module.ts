import { PrismaModule } from "src/prisma/prisma.module";
import { RolexController } from "./rolex.controller";
import { RolexService } from "./rolex.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [RolexController],
    providers: [RolexService]
})
export class RolexModule { };