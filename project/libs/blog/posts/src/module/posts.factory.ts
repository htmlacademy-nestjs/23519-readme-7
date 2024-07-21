import { Injectable } from '@nestjs/common';
import { EntityFactory, CommonPost } from '@project/core';
import { PostsEntity } from './posts.entity';

@Injectable()
export class PostsFactory implements EntityFactory<PostsEntity> {
  public create(entityPlainData: CommonPost): PostsEntity {
    return new PostsEntity(entityPlainData);
  }
}
