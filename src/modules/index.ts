// Libraries
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
// Modules
@Module({
  imports: [
    UsersModule
  ],
  controllers: []
})
export class ApiModule {}