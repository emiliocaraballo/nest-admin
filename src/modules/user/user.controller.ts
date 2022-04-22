// Libraries
import {
    Controller,
    Post
  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {

   @Post('login')
    async login() {
        return "Hola mundo";
    }
}