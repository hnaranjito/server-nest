import { Body, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { createPostDto, editPostDto } from './dtos';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<Post>,
  ) {}

  async getMany(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getOne(id: number) {
    const post = await this.postRepository.findOneBy({
      id: id,
    });

    if (!post) throw new NotFoundException('No se encontraron datos');
    return post;
  }

  async createOne(dto: createPostDto) {
    const post = this.postRepository.create(dto as any);
    return await this.postRepository.save(post);
  }

  async editOne(id: number, dto: editPostDto) {
    const post = await this.postRepository.findOneBy({
      id: id,
    });
    if (!post) throw new NotFoundException('Post does not exist');
    const editedPost = new Post();

    editedPost.id = post.id;
    editedPost.slug = post.slug;
    editedPost.title = post.title;
    editedPost.excerpt = post.excerpt;
    editedPost.content = post.content;
    editedPost.status = post.status;
    editedPost.tags = post.tags;
    editedPost.category = post.category;

    return await this.postRepository.save(editedPost);
  }

  async deleteOne(id: number) {
    return await this.postRepository.delete(id);
  }
}
