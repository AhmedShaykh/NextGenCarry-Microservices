import { ValentinoModule } from "./Valentino/valentino.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { LVModule } from "./LV/lv.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    LVModule,
    ValentinoModule
  ]
})
export class AppModule { };