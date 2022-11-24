import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/errors/allExceptionsFilter';
import { ICorsConfig } from './common/interfaces/cors.config.interface';
import { ISwaggerConfig } from './common/interfaces/swagger.config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const corsConfig = configService.get<ICorsConfig>('corsConfig');
  const swaggerConfig = configService.get<ISwaggerConfig>('swaggerConfig');

  // Swagger Api
  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Nestjs')
      .setDescription(swaggerConfig.description || 'The nestjs API description')
      .setVersion(swaggerConfig.version || '1.0')
      .addServer(swaggerConfig.servers.local.url, swaggerConfig.servers.local.description)
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
  }

  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  const port = process.env.PORT || 3333;

  await app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
bootstrap();
