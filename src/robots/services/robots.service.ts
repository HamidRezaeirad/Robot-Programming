import { Injectable } from '@nestjs/common';
import { Direction } from '../../enums';
import { Dimension, Position, Report } from '../../interfaces';
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
    const { row, column } = this.extractRoomDimension(dimension);
    const extractPosition = this.extractPosition(position);

    return { result: `${dimension} ${position} ${commands}` };
  }

  extractPosition(position: string): Position {
    const positionnArray = position.split(' ');
    const x = parseInt(positionnArray[0]);
    const y = parseInt(positionnArray[1]);
    const direction: Direction = Direction[positionnArray[2]];
    return { x, y, direction };
  }

  extractRoomDimension(dimension: string): Dimension {
    const dimensionArray = dimension.split(' ');
    const row = parseInt(dimensionArray[0]);
    const column = parseInt(dimensionArray[1]);
    return { row, column };
  }
}
