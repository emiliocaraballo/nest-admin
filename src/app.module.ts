import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';

// DB connection
import { connection } from './models';
// Api Modules
import { ApiModule } from './modules';

@Module({
  imports: [connection,ApiModule],
  controllers: [AppController]
})
export class AppModule {}