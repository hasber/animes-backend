import { Module } from '@nestjs/common';
import { AnimesModule } from './animes/animes.module';
import { GraphqlModule } from './core/graphql/graphql/graphql.module';

@Module({
  imports: [AnimesModule, GraphqlModule],
})
export class AppModule {}
