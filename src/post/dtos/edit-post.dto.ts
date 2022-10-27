/* eslint-disable prettier/prettier */

import { createPostDto } from "./create-post.dto";
import { PartialType } from "@nestjs/mapped-types"
import { OmitType } from "@nestjs/swagger";

export class editPostDto extends PartialType(
    OmitType(createPostDto,['slug'] as const)
) {}

