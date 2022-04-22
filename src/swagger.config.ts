// Libraries
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Constans
import constants from './constants';

// Set swagger configuration
export const setSwaggerConfig = (app: INestApplication, docsPath: string) => {
  const config = new DocumentBuilder()
    .setTitle('App')
    .setDescription('API Docs for app')
    .setVersion('1.0')
    .addBearerAuth(
      {
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'accessToken',
    )
    .addServer(constants.APP_API_URL)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docsPath || 'api/docs', app, document, {
    swaggerOptions: { filter: true },
  });
};
