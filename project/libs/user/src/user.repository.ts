import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { UserEntity } from './user.enitity';
import { UserFactory } from './user.factory';
import { AuthUser } from '@project/core';


@Injectable()
export class UserRepository extends BaseMemoryRepository<UserEntity> {
  constructor(
    entityFactory: UserFactory,
    ) {
    super(entityFactory);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const entities = Array.from(this.entities.values());
    const model = entities.find(entity => entity.email === email)
    
    if (!model) return null;

    return Promise.resolve(this.entityFactory.create(model))
  }
}
