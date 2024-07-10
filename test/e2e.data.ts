import { Report } from 'src/interfaces';
import { RobotDto } from 'src/robots/models/robots.dto';

export const successReport201: Report = { result: '3 1 E' };
export const failedRobotDto500Body = 'Out of bounds at 0 -1';
export const successReport201Body = '3 1 E';

export const successRobotDto201: RobotDto = {
  dimension: '5 5',
  position: '0 0 E',
  commands: 'RFLFFLRF',
};

export const failedRobotDto500: RobotDto = {
  dimension: '3 3',
  position: '2 2 N',
  commands: 'FFLFFRF',
};

export const failedRobotDtoDimension400: RobotDto = {
  dimension: '3 ',
  position: '2 2 N',
  commands: 'FFLFFRF',
};

export const failedRobotDtoPosition400: RobotDto = {
  dimension: '3 3',
  position: '2 2 N 4',
  commands: 'FFLFFRF',
};

export const failedRobotDtoCommands400: RobotDto = {
  dimension: '3 3',
  position: '2 2 N',
  commands: 'FF33LFFRF',
};
