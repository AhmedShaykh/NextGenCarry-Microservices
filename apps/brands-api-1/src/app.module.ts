import { PrismaModule } from "./prisma/prisma.module";
import { GucciModule } from "./Gucci/gucci.module";
import { RolexModule } from "./Rolex/rolex.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    GucciModule,
    RolexModule
  ]
})
export class AppModule { };