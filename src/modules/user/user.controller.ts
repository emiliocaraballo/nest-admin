// Libraries
import {
    Controller,
    Post,
    BadRequestException,
    Get,
    Req,
    Query,
    UseGuards,
  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
  import { to } from 'await-to-js';
import { RolesGuard } from 'src/guards/roles.guard';


@ApiTags('user')
@Controller('user')
export class UserController {

    @UseGuards(RolesGuard)
    @Post('login')
    async login() {
        return "Hola mundo";
    }
}