import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { BrandModule } from "./brand/brand.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    BrandModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { };