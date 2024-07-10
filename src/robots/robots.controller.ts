import { Body, Controller, Post } from '@nestjs/common';
import { Report } from '../interfaces';
import { RobotDto } from './models/robots-dto';
import { RobotsService } from './services/robots.service';

@Controller('robots')
export class RobotsController {
  constructor(private robotsService: RobotsService) {}

  /**
   * Walk forward a Robot entity
   *
   * @param RobotDto
   * @return string instance
   */
  @Post('')
  async walk(@Body() robotDto: RobotDto): Promise<Report> {
    return await this.robotsService.walk(robotDto);
  }
}
