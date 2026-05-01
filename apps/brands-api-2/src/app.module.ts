import { PrismaModule } from "./prisma/prisma.module";
import { ChanelModule } from "./Chanel/chanel.module";
import { NikeModule } from "./Nike/nike.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ChanelModule,
    NikeModule
  ]
})
export class AppModule { };