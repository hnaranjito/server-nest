/* eslint-disable prettier/prettier */
import { PostCategory } from '../enums';
import { IsString, IsBoolean, IsArray, IsEnum } from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString';

export class createPostDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsEnum(PostCategory,{
    message: `Ivalid Option. The options correct are ${ EnumToString(PostCategory)}`
  })
  category: PostCategory;

  @IsArray()
  @IsString({each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}
