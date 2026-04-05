import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { CATModule } from "./cat/cat.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    CATModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { };