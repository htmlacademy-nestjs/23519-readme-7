import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { CommentsFactory } from './comments.factory';
import { CommentsEntity } from './comments.entity';

@Injectable()
export class CommentsRepository extends BaseMemoryRepository<CommentsEntity> {
  constructor(
    entityFactory: CommentsFactory,
    ) {
    super(entityFactory);
  }
}
