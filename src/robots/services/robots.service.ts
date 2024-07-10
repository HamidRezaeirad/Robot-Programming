import { Injectable } from '@nestjs/common';
import { Report } from '../../interfaces';
import { RobotDto } from '../models/robots-dto';

@Injectable()
export class RobotsService {
  /**
   * Walk forward a Robot entity
   *
   * @param RobotDto
   * @returns string instance
   */
  walk(robotDto: RobotDto): Report {
    const { dimension, position, commands } = robotDto;

    return { result: `${dimension} ${position} ${commands}` };
  }
}
