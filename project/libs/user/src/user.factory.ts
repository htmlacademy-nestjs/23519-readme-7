import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.enitity';
import { EntityFactory, AuthUser } from '@project/core';

@Injectable()
export class UserFactory implements EntityFactory<UserEntity> {
  public create(entityPlainData: AuthUser): UserEntity {
    return new UserEntity(entityPlainData);
  }
}
