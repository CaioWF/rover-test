import {
  Body,
  Controller, HttpCode, HttpStatus, ParseFilePipeBuilder, Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { InstructionsDto } from './dtos/instruction.dto';
import { RoverService } from './rover.service';

@Controller('rover')
@ApiTags('Rover')
export class RoverController {
  constructor(private readonly roverService: RoverService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileInterceptor('file'))
  postRoverInstructions(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'text/plain',
        })
        .addMaxSizeValidator({
          maxSize: 1000
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        }),
    ) instructions: Express.Multer.File,
    @Body() data: InstructionsDto
  ): Promise<string> {
    return this.roverService.exec({ file: instructions });
  }
}
