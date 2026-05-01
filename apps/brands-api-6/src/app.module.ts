import { HermesModule } from "./Hermes/hermes.module";
import { MongooseModule } from "@nestjs/mongoose";
import { setServers } from "node:dns/promises";
import { ConfigModule } from "@nestjs/config";
import { YSLModule } from "./YSL/ysl.module";
import { Module } from "@nestjs/common";

setServers(["1.1.1.1", "8.8.8.8"]);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => {
        if (!config.DATABASE_URL_API_6) {
          throw new Error("DATABASE URL API 6 Is Not Defined In The Environment Variables.");
        }
        return config;
      }
    }),
    MongooseModule.forRoot(
      process.env.DATABASE_URL_API_6!
    ),
    HermesModule,
    YSLModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };