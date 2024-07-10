import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotsController } from './robots/robots.controller';
import { RobotsModule } from './robots/robots.module';
import { RobotsService } from './robots/services/robots.service';

@Module({
  controllers: [AppController, RobotsController],
  providers: [AppService, RobotsService],
  imports: [RobotsModule],
})
export class AppModule {}
