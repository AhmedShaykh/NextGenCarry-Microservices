import { PrismaModule } from "./prisma/prisma.module";
import { HermesModule } from "./Hermes/hermes.module";
import { PradaModule } from "./Prada/prada.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    PradaModule,
    HermesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };