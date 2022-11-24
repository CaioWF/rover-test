import { UnprocessableEntityException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RoverService } from '../../../src/rover/rover.service';
import { fileWithWrongInstructionsMock } from '../../mocks/file-with-wrong-instructions.mock';
import { fileMock } from '../../mocks/file.mock';

describe('RoverService', () => {
  let service: RoverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoverService],
    }).compile();

    service = module.get<RoverService>(RoverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the final position of the rover', async () => {
    const result = await service.exec({ file: fileMock });

    expect(result).toEqual('1 3 N\n5 1 E');
  });

  it('should throw an error if the rover is out of the plateau', async () => {
    await expect(service.exec({ file: fileWithWrongInstructionsMock }))
      .rejects.toThrow(new UnprocessableEntityException('Rover 1 is out of the plateau'));
  });
});
