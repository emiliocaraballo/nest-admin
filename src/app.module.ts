import { Module } from '@nestjs/common';
import { AppController } from './modules/app.controller';

// DB connection
import { connection } from './models';
// Api Modules
import { ApiModule } from './modules';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [connection,ApiModule],
  controllers: [AppController]
})
export class AppModule {}