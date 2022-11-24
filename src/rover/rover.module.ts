import { Module } from '@nestjs/common';
import { RoverController } from './rover.controller';
import { RoverService } from './rover.service';

@Module({
  controllers: [RoverController],
  providers: [RoverService],
})
export class RoverModule {}
