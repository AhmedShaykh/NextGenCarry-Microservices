import { BalenciagaModule } from "./Balenciaga/balenciaga.module";
import { PrismaModule } from "./prisma/prisma.module";
import { NikeModule } from "./Nike/nike.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    BalenciagaModule,
    NikeModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };