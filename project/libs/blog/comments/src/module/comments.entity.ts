import { compare, genSalt, hash } from 'bcrypt';


import { Entity, StorableEntity, Comment, CommonPost } from '@project/core';

export class CommentsEntity extends Entity implements StorableEntity<Comment> {
    public text: string;
    public ownerId: string;

  constructor(comment?: Comment) {
    super();
    this.populate(comment);
  }

  public populate(comment?: Comment): void {
    if (!comment) {
      return;
    }

    this.id = comment.id ?? '';
    this.text = comment.text;
    this.ownerId = comment.ownerId;
  }

  public toPOJO(): Comment {
    return {
      id: this.id,
      text: this.text,
      ownerId: this.ownerId,
    }
  }
}
