import { IInstructionRover, Instruction } from '../domain/instruction.entity';
import { InstructionsDto } from '../dtos/instruction.dto';
import { Map } from './map.interface';

export class IntructionMap implements Map<InstructionsDto, Instruction> {
  toEntity({ file }: InstructionsDto): Instruction {
    const instructionsArray = file.buffer.toString('utf-8').trim().split('\n');

    const plateauDimension = instructionsArray
      .shift()
      .split(' ')
      .map(Number) as [number, number];

    const instructionsRover: IInstructionRover[] = [];

    for (let i = 0; i < instructionsArray.length; i = i + 2) {
      const position = instructionsArray[i].split(' ');
      const initialDirection = position.pop();
      const initialPosition = {
        x: Number(position.shift()),
        y: Number(position.shift()),
      };
      const movements = instructionsArray[i + 1].split('');

      instructionsRover.push({
        initialPosition,
        initialDirection,
        movements,
      });
    }

    return new Instruction(plateauDimension, instructionsRover);
  }
}
