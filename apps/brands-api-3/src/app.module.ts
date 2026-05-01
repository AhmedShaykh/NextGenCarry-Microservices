import { PrismaModule } from "./prisma/prisma.module";
import { CelineModule } from "./Celine/celine.module";
import { DiorModule } from "./Dior/dior.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    DiorModule,
    CelineModule
  ]
})
export class AppModule { };