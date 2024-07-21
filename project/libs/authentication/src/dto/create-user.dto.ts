import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Min, Max, IsString } from 'class-validator';
import { AuthenticationValidateMessage } from '../module/authentication.constants';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  @IsString()
  @Min(3)
  @Max(50)
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @IsString()
  public lastname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @IsString()
  @Min(3)
  @Max(50)
  public password: string;
}
