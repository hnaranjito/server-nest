import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { createPostDto, editPostDto } from './dtos';

@Controller('post')
export class PostController {
  @Get()
  getMany() {
    return 'OK';
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    //console.log(typeof id);
    return {
      message: 'getOne',
    };
  }

  @Post()
  createOne(@Body() dto: createPostDto) {
    return dto;
  }

  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: editPostDto) {
    return {
      datos: dto,
      message: 'Información actualizada',
    };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return {
      message: 'Información eliminada',
    };
  }
}
