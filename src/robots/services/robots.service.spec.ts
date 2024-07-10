import { Test, TestingModule } from '@nestjs/testing';
import { InternalServerError } from '../../errors';
import { RobotsService } from './robots.service';
import {
  failedErrorEast,
  failedErrorNorth,
  failedErrorSouth,
  failedErrorWest,
  failedRobotDtoEast,
  failedRobotDtoNorth,
  failedRobotDtoSouth,
  failedRobotDtoWest,
  successReport1,
  successReport2,
  successRobotDto1,
  successRobotDto2,
} from './test.data';

describe('RobotsService', () => {
  let robotsService: RobotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RobotsService],
    }).compile();

    robotsService = module.get<RobotsService>(RobotsService);
  });

  it('should be defined', () => {
    expect(robotsService).toBeDefined();
  });

  it('should calling walk method successfully', () => {
    const { result } = robotsService.walk(successRobotDto1);
    expect(result).toBe(successReport1.result);
  });

  it('should calling walk method successfully', () => {
    const { result } = robotsService.walk(successRobotDto2);
    expect(result).toBe(successReport2.result);
  });

  it('should calling walk method and throw error (Out of bounds at 0 -1) North', async () => {
    await expect(async () =>
      robotsService.walk(failedRobotDtoNorth),
    ).rejects.toThrow(new InternalServerError(failedErrorNorth));
  });

  it('should calling walk method and throw error (Out of bounds at -2 2) West', async () => {
    await expect(async () =>
      robotsService.walk(failedRobotDtoWest),
    ).rejects.toThrow(new InternalServerError(failedErrorWest));
  });

  it('should calling walk method and throw error (Out of bounds at 2 5) South', async () => {
    await expect(async () =>
      robotsService.walk(failedRobotDtoSouth),
    ).rejects.toThrow(new InternalServerError(failedErrorSouth));
  });

  it('should calling walk method and throw error (Out of bounds at 5 2) East', async () => {
    await expect(async () =>
      robotsService.walk(failedRobotDtoEast),
    ).rejects.toThrow(new InternalServerError(failedErrorEast));
  });
});
