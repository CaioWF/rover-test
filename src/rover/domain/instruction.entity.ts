export interface IInstructionRover {
  initialPosition: { x: number; y: number };
  initialDirection: string;
  movements: string[];
}

export class Instruction {
  private plateauDimension: [number, number];
  private instructions: IInstructionRover[];

  constructor(
    plateauDimension: [number, number],
    instructions: IInstructionRover[],
  ) {
    this.plateauDimension = plateauDimension;
    this.instructions = instructions;
  }

  getPlateauDimension(): [number, number] {
    return this.plateauDimension;
  }

  getInstructions(): IInstructionRover[] {
    return this.instructions;
  }
}
