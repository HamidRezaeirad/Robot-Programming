import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';
import {
  failedRobotDto500,
  failedRobotDtoCommands400,
  failedRobotDtoDimension400,
  failedRobotDtoPosition400,
  successReport201,
  successRobotDto201,
} from './e2e.data';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('/version (GET) Should return app version 200', () => {
    return request(app.getHttpServer())
      .get('/api/version')
      .expect(200)
      .expect('Version: 1.0.0');
  });

  it('/api/robots (Post) Should return 201', () => {
    return request(app.getHttpServer())
      .post('/api/robots')
      .send(successRobotDto201)
      .expect(201)
      .expect(successReport201);
  });

  it('/api/robots (Post) Should return 500 Out of bounds', () => {
    return request(app.getHttpServer())
      .post('/api/robots')
      .send(failedRobotDto500)
      .expect(500);
  });

  it('/api/robots (Post) Should return 400 bad request wrong dimension', () => {
    return request(app.getHttpServer())
      .post('/api/robots')
      .send(failedRobotDtoDimension400)
      .expect(400);
  });

  it('/api/robots (Post) Should return 400 bad request wrong position', () => {
    return request(app.getHttpServer())
      .post('/api/robots')
      .send(failedRobotDtoPosition400)
      .expect(400);
  });

  it('/api/robots (Post) Should return 400 bad request wrong commands', () => {
    return request(app.getHttpServer())
      .post('/api/robots')
      .send(failedRobotDtoCommands400)
      .expect(400);
  });
});
