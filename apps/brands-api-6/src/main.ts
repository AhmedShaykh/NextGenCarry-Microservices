import { ValidationPipe } from "@nestjs/common";
import { json, urlencoded } from "express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: "200mb" }));

  app.use(urlencoded({ limit: "200mb", extended: true }));

  app.enableCors({
    origin: [
      "https://nextgencarry-store.vercel.app",
      "https://www.nextgencarry.store",
      "http://localhost:3000"
    ],
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true
  });

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }));

  app.setGlobalPrefix("api");

  await app.listen(process.env.PORT || 8006);

};

bootstrap();