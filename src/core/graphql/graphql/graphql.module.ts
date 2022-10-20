import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      introspection: true,
      playground: true, // TODO: poner en false para producción,
      autoSchemaFile: join(process.cwd(), '../core/graphql/api-schema.gql'),
      cors: false,
    }),
  ],
})
export class GraphqlModule {}
