import { PrismaModule } from "./prisma/prisma.module";
import { GucciModule } from "./Gucci/gucci.module";
import { ConfigModule } from "@nestjs/config";
import { LVModule } from "./LV/lv.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    LVModule,
    GucciModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };