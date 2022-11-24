import { ApiProperty } from '@nestjs/swagger';

export class InstructionsDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  file: Express.Multer.File;
}
