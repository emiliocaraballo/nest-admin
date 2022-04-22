import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// Constants
import constants from 'src/constants';
import { LocalStrategy } from '../auth/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';
@Module({
  imports:[
    JwtModule.register({
      secret: constants.TOKEN_KEY,
      signOptions: {expiresIn: constants.TOKEN_DURATION},
    }),
    TypeOrmModule.forFeature([]),
  ],
  controllers:[UsersController],
  providers: [UsersService,AuthService,LocalStrategy, JwtStrategy],
  exports:[]
})
export class UsersModule {}