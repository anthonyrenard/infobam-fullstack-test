import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Enable validation globally
  const config = new DocumentBuilder()
    .setTitle('Vehicle API')
    .setDescription('API documentation for the Vehicle API test')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  console.log('document', document);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
