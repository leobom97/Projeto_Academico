import { IsString } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  title: string;

  @IsString()
  url: string;
}
