// Libraries
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// Modules
@Module({
  imports: [
    UserModule
  ],
  controllers: [],
})
export class ApiModule {}