// Libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Services

// Controller
import { UserController } from './user.controller';
// entities

@Module({
  imports: [
    TypeOrmModule.forFeature([
     
    ])],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
