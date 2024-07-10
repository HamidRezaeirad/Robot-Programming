import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { validation } from '../../messages/robots.message';

const { commands, dimension, position } = validation;

export class RobotDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[\d][\s][\d]$/, {
    message: dimension,
  })
  @ApiProperty({
    description: 'The dimension of the room, like 5 5',
  })
  dimension: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[\d][\s][\d][\s][N|S|E|W]$/, {
    message: position,
  })
  @ApiProperty({
    description: 'The initial position of the robot, like 1 2 N',
  })
  position: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[R|L|F]*$/, {
    message: commands,
  })
  @ApiProperty({
    description: 'The command that walks the robot, like RFRFFRFRF',
  })
  commands: string;
}
