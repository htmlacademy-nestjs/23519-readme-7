import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsFactory } from './comments.factory';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository, CommentsFactory],
  exports: [CommentsRepository, CommentsFactory]
})
export class CommentsModule {}
