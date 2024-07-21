import { compare, genSalt, hash } from 'bcrypt';


import { Entity, StorableEntity, AuthUser, User, CommonPost } from '@project/core';

export class PostsEntity extends Entity implements StorableEntity<CommonPost> {
    public title: string;
    public ownerId: string;

  constructor(post?: CommonPost) {
    super();
    this.populate(post);
  }

  public populate(post?: CommonPost): void {
    if (!post) {
      return;
    }

    this.id = post.id ?? '';
    this.title = post.title;
    this.ownerId = post.ownerId;
  }

  public toPOJO(): CommonPost {
    return {
      id: this.id,
      title: this.title,
      ownerId: this.ownerId,
    }
  }
}
