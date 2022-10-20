import { Args, Query, Resolver } from '@nestjs/graphql';
import { AnimesService } from './animes.service';
import { AnimeObject } from './dto/animes.interfaces';

@Resolver()
export class AnimesResolver {
  constructor(private readonly animesService: AnimesService) {}

  @Query(() => [AnimeObject])
  async getAnimes(@Args('name') name: string) {
    const response = await this.animesService.getAnimes(name);
    return response;
  }
}
