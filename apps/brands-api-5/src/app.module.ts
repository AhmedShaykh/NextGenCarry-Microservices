import { AdidasModule } from "./Adidas/adidas.module";
import { FendiModule } from "./Fendi/fendi.module";
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
        if (!config.DATABASE_URL_API_5) {
          throw new Error("DATABASE URL API 5 Is Not Defined In The Environment Variables.");
        }
        return config;
      }
    }),
    MongooseModule.forRoot(
      process.env.DATABASE_URL_API_5!
    ),
    AdidasModule,
    FendiModule,
    YSLModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };