import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesResolver } from './animes.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [AnimesService, AnimesResolver],
})
export class AnimesModule {}
