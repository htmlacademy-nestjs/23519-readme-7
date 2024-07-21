import { Module } from '@nestjs/common';
import { UserModule } from '@project/user';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

@Module({
  imports: [
    UserModule,
  ],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
  ],
  exports: [],
})
export class AuthenticationModule {}
