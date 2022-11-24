import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Rover } from './domain/rover.entity';
import { InstructionsDto } from './dtos/instruction.dto';
import { IntructionMap } from './mappers/instruction.mapper';

@Injectable()
export class RoverService {
  async exec(rawInstructions: InstructionsDto): Promise<string> {
    const instructions = new IntructionMap().toEntity(rawInstructions);

    const roversFinalPosition: Rover[] = [];

    instructions.getInstructions().forEach((instruction, index) => {
      const rover = new Rover(
        instruction.initialPosition.x,
        instruction.initialPosition.y,
        instruction.initialDirection,
      );

      instruction.movements.forEach((movement) => {
        if (movement === 'M') {
          const isValidMove = rover.isValidMove(instructions.getPlateauDimension());          
          if (isValidMove) {
            rover.move();
          } else {
            throw new UnprocessableEntityException(`Rover ${index + 1} is out of the plateau`);
          }
        } else {
          rover.rotate(movement);
        }
      });

      roversFinalPosition.push(rover);
    });

    return roversFinalPosition.map((rover) => rover.getFullPosition()).join('\n');
  }
}
