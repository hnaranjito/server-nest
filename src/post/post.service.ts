import { Body, Injectable } from '@nestjs/common';
import { createPostDto, editPostDto } from './dtos';

@Injectable()
export class PostService {
  getMany() {
    return { ok: 'getMany' };
  }
  createOne(@Body() dto: createPostDto) {
    return { ok: 'createOne', dto: dto };
  }
  getOne(id: number) {
    return { ok: 'getOne' };
  }
  editOne(id: number, dto: editPostDto) {
    return { ok: 'editOne', dto: dto };
  }
  deleteOne(id: number) {
    return { ok: 'deleteOne' };
  }
}
