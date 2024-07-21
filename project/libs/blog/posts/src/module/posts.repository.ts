import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { PostsFactory } from './posts.factory';
import { PostsEntity } from './posts.entity';

@Injectable()
export class PostsRepository extends BaseMemoryRepository<PostsEntity> {
  constructor(
    entityFactory: PostsFactory,
    ) {
    super(entityFactory);
  }
}
