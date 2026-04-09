import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      "https://nextgencarry-store.vercel.app/",
      "https://nextgencarry.store/"
    ],
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true
  });

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix("api");

  await app.listen(process.env.PORT || 8006);

};

bootstrap();