import { Test } from '@nestjs/testing';
import { Report } from 'src/interfaces';
import { RobotDto } from '../models/robots-dto';
import { RobotsService } from '../services/robots.service';
import { RobotsController } from './robots.controller';

describe('RobotsController', () => {
  let robotsController: RobotsController;
  let robotsService: RobotsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RobotsController],
      providers: [RobotsService],
    }).compile();

    robotsService = moduleRef.get<RobotsService>(RobotsService);
    robotsController = moduleRef.get<RobotsController>(RobotsController);
  });

  describe('walk', () => {
    it('should be defined', () => {
      expect(robotsController).toBeDefined();
    });

    it('should return object of Report', async () => {
      const robotDto: RobotDto = {
        dimension: 'mock',
        commands: 'mock',
        position: 'mock',
      };
      const result: Report = { result: 'mock' };

      jest.spyOn(robotsService, 'walk').mockImplementation(() => result);

      expect(await robotsController.walk(robotDto)).toBe(result);
    });
  });
});
