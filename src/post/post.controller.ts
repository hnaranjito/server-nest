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
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getMany() {
    return this.postService.getMany();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    //console.log(typeof id);
    return this.postService.getOne(id);
  }

  @Post()
  createOne(@Body() dto: createPostDto) {
    return this.postService.createOne(dto);
  }

  @Put(':id')
  editOne(@Param('id') id: number, @Body() dto: editPostDto) {
    return this.postService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.postService.deleteOne(id);
  }
}
