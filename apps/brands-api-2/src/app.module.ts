import { ChanelModule } from "./Chanel/chanel.module";
import { PrismaModule } from "./prisma/prisma.module";
import { DiorModule } from "./Dior/dior.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    ChanelModule,
    DiorModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };