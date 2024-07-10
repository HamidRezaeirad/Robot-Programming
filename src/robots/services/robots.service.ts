import { Injectable } from '@nestjs/common';
import { Command, Direction } from '../../enums';
import { InternalServerError } from '../../errors';
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
    let extractPosition = this.extractPosition(position);

    for (const command of commands) {
      extractPosition = this.move(extractPosition, command);
    }
    const { x, y, direction } = extractPosition;
    if (x < 0 || x > row || y < 0 || y > column)
      throw new InternalServerError(`Out of bounds at ${x} ${y}`);
    return { result: `${x} ${y} ${Direction[direction]}` };
  }

  move(position: Position, command: string) {
    let { x, y, direction } = position;
    switch (command) {
      case Command.Turn_Right:
        direction = direction + 90 > 270 ? Direction.N : direction + 90;
        break;
      case Command.Turn_Left:
        direction = direction - 90 < 0 ? Direction.W : direction - 90;
        break;
      default:
        console.log(`command ${command} not found`);
      case Command.Walk_Forward:
        switch (direction) {
          case Direction.N:
            y = y - 1;
            break;
          case Direction.S:
            y = y + 1;
            break;
          case Direction.E:
            x = x + 1;
            break;
          case Direction.W:
            x = x - 1;
            break;
          default:
            console.log(`direction ${direction} not found`);
        }
    }
    return { x, y, direction };
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
