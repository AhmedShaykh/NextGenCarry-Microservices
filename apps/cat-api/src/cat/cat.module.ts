import { PrismaModule } from "src/prisma/prisma.module";
import { CATController } from "./cat.controller";
import { CATService } from "./cat.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [CATController],
    providers: [CATService]
})
export class CATModule { };