import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AnimesOut } from './dto/animes-output.interface';

@Injectable()
export class AnimesService {
  constructor(private httpService: HttpService) {}

  async getAnimes(name: string) {
    try {
      const response = await this.httpService.axiosRef.get(
        `https://api.jikan.moe/v4/anime?q=${name}&sfw`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = response.data.data as AnimesOut[];
      for (const key of data) {
        if (key.score) {
          if (Number(key.score) > 6) {
            key.scoreMessage = 'Great, this is one of the best anime.';
            continue;
          }
          if (Number(key.score) > 4) {
            key.scoreMessage = 'You may have fun.';
            continue;
          }
          if (Number(key.score) >= 1) {
            key.scoreMessage = 'I do not recommend it';
            continue;
          }
        } else {
          key.scoreMessage = 'No score';
        }
      }
      return data;
    } catch (error) {
      return [];
    }
  }
}
