// Libraries
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { json } from 'body-parser';
import { Transport } from '@nestjs/microservices';

// Errors filters
import { HttpExceptionFilter } from 'src/filters';

// Constants
import constants from './constants';
import { setSwaggerConfig } from './swagger.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
   // Set limit to request
   app.use(json({ limit: '5mb' }));
   // Set prefix
   app.setGlobalPrefix('api');
   if (constants.NODE_ENV !== 'production') {
    // Set swagger docs
    setSwaggerConfig(app, 'api/docs');
  }
   // Set general error filter
   app.useGlobalFilters(new HttpExceptionFilter());

   // Set helmet config
   app.use(helmet());
   
   if (constants.REDIS_URL) {
    // Microservice configuration (Hybrid application)
    app.connectMicroservice(
      {
        transport: Transport.REDIS,
        options: {
          url: constants.REDIS_URL,
        },
      },
      { inheritAppConfig: true },
    );
  }
    // Init app services
  await app.startAllMicroservices();
  await app.listen(constants.APP_PORT);
}
bootstrap();
