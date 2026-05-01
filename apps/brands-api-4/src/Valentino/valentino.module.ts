import { PrismaModule } from "src/prisma/prisma.module";
import { Module } from "@nestjs/common";
import { ValentinoController } from "./valentino.controller";
import { ValentinoService } from "./valentino.service";

@Module({
    imports: [PrismaModule],
    controllers: [ValentinoController],
    providers: [ValentinoService]
})
export class ValentinoModule { };