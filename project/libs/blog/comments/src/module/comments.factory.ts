import { Injectable } from '@nestjs/common';
import { EntityFactory, Comment } from '@project/core';
import { CommentsEntity } from './comments.entity';

@Injectable()
export class CommentsFactory implements EntityFactory<CommentsEntity> {
  public create(entityPlainData: Comment): CommentsEntity {
    return new CommentsEntity(entityPlainData);
  }
}
