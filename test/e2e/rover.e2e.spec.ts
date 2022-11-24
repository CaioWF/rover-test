import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { resolve } from 'path';
import * as request from 'supertest';
import { RoverModule } from '../../src/rover/rover.module';
import { RoverService } from '../../src/rover/rover.service';

describe('RoverController (e2e)', () => {
  let app: INestApplication;

  const roverSeviceMock = { exec: jest.fn() };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RoverModule],
    })
      .overrideProvider(RoverService)
      .useValue(roverSeviceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/rover (POST)', () => {
    return request(app.getHttpServer())
      .post('/rover')
      .attach('file', resolve(__dirname, '../mocks/instructions.txt'))
      .expect(200)
  });

  it('/rover (POST) returns 422 when file is too big', () => {
    return request(app.getHttpServer())
      .post('/rover')
      .attach('file', resolve(__dirname, '../mocks/instructions-invalid-too-big.txt'))
      .expect(422)
  });

  it('/rover (POST) returns 422 when file type is invalid', () => {
    return request(app.getHttpServer())
      .post('/rover')
      .attach('file', resolve(__dirname, '../mocks/instructions.json'))
      .expect(422)
  });

  it('/rover (POST) returns 422 when file is empty', () => {
    return request(app.getHttpServer())
      .post('/rover')
      .expect(422)
  });
});