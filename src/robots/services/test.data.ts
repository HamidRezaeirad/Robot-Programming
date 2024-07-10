import { Report } from 'src/interfaces';
import { RobotDto } from '../models/robots.dto';

export const successReport1: Report = { result: '3 1 E' };
export const successReport2: Report = { result: '1 3 N' };

export const failedErrorNorth: string = 'Out of bounds at 0 -1';
export const failedErrorWest: string = 'Out of bounds at -2 2';
export const failedErrorSouth: string = 'Out of bounds at 2 5';
export const failedErrorEast: string = 'Out of bounds at 5 2';

export const successRobotDto1: RobotDto = {
  dimension: '5 5',
  position: '0 0 E',
  commands: 'RFLFFLRF',
};

export const successRobotDto2: RobotDto = {
  dimension: '5 5',
  position: '1 2 N',
  commands: 'RFRFFRFRF',
};

export const failedRobotDtoNorth: RobotDto = {
  dimension: '3 3',
  position: '2 2 N',
  commands: 'FFLFFRF',
};

export const failedRobotDtoWest: RobotDto = {
  dimension: '3 3',
  position: '2 2 N',
  commands: 'LFFFF',
};

export const failedRobotDtoSouth: RobotDto = {
  dimension: '3 3',
  position: '2 2 N',
  commands: 'RRFFF',
};

export const failedRobotDtoEast: RobotDto = {
  dimension: '3 3',
  position: '2 2 N',
  commands: 'RFFF',
};
