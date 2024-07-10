import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class RobotDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[\d][\s][\d]$/, {
    message: "dimension's input is not correct! Should be like 5 6",
  })
  @ApiProperty({
    description: 'The dimension of the room, like 5 5',
  })
  dimension: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[\d][\s][\d][\s][N|S|E|W]$/, {
    message: "position's input is not correct! Should be like 1 2 N (N|E|S|W)",
  })
  @ApiProperty({
    description: 'The initial position of the robot, like 1 2 N',
  })
  position: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[R|L|F]*$/, {
    message: 'commands not found! The accepted inputs: R|L|F',
  })
  @ApiProperty({
    description: 'The command that walks the robot, like RFRFFRFRF',
  })
  commands: string;
}
