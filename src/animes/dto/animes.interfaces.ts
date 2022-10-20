import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Jpg {
  @Field()
  image_url: string;

  @Field()
  small_image_url: string;

  @Field()
  large_image_url: string;
}

@ObjectType()
export class Webp {
  @Field()
  image_url: string;

  @Field()
  small_image_url: string;

  @Field()
  large_image_url: string;
}

@ObjectType()
export class Images {
  @Field()
  jpg: Jpg;

  @Field()
  webp: Webp;
}

@ObjectType()
export class Images2 {
  @Field()
  image_url?: string;

  @Field()
  small_image_url?: string;

  @Field()
  medium_image_url?: string;

  @Field()
  large_image_url?: string;

  @Field()
  maximum_image_url?: string;
}

@ObjectType()
export class Trailer {
  @Field()
  youtube_id?: string;

  @Field()
  url?: string;

  @Field()
  embed_url?: string;

  @Field()
  images: Images2;
}

@ObjectType()
export class Title {
  @Field()
  type: string;

  @Field()
  title: string;
}

@ObjectType()
export class From {
  @Field()
  day: number;

  @Field()
  month: number;

  @Field()
  year: number;
}

@ObjectType()
export class To {
  @Field()
  day?: string;

  @Field()
  month?: string;

  @Field()
  year?: string;
}

@ObjectType()
export class Prop {
  @Field()
  from: From;

  @Field()
  to: To;
}

@ObjectType()
export class Aired {
  @Field()
  from: Date;

  @Field()
  to?: string;

  @Field()
  prop: Prop;

  @Field()
  string: string;
}

@ObjectType()
export class Broadcast {
  @Field()
  day?: string;

  @Field()
  time?: string;

  @Field()
  timezone?: string;

  @Field()
  string?: string;
}

@ObjectType()
export class Genre {
  @Field({ nullable: true })
  mal_id: number;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class Theme {
  @Field({ nullable: true })
  mal_id: number;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class Demographic {
  @Field({ nullable: true })
  mal_id: number;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class AnimeObject {
  @Field({ nullable: true })
  mal_id: number;

  @Field()
  scoreMessage: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  images: Images;

  @Field({ nullable: true })
  trailer: Trailer;

  @Field({ nullable: true })
  approved: boolean;

  @Field(() => [Title], { nullable: true })
  titles: Title[];

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  title_english: string;

  @Field({ nullable: true })
  title_japanese: string;

  @Field(() => [String], { nullable: true })
  title_synonyms: string[];

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  source: string;

  @Field({ nullable: true })
  episodes: number;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  airing: boolean;

  @Field({ nullable: true })
  aired: Aired;

  @Field({ nullable: true })
  duration: string;

  @Field({ nullable: true })
  rating: string;

  @Field({ nullable: true })
  score?: string;

  @Field({ nullable: true })
  scored_by?: string;

  @Field({ nullable: true })
  rank: number;

  @Field({ nullable: true })
  popularity: number;

  @Field({ nullable: true })
  members: number;

  @Field({ nullable: true })
  favorites: number;

  @Field({ nullable: true })
  synopsis?: string;

  @Field({ nullable: true })
  background?: string;

  @Field({ nullable: true })
  season?: string;

  @Field({ nullable: true })
  year?: string;

  @Field({ nullable: true })
  broadcast: Broadcast;

  @Field(() => [String], { nullable: true })
  producers: string[];

  @Field(() => [String], { nullable: true })
  licensors: string[];

  @Field(() => [String], { nullable: true })
  studios: string[];

  @Field(() => [Genre], { nullable: true })
  genres: Genre[];

  @Field(() => [String], { nullable: true })
  explicit_genres: string[];

  @Field(() => [Theme], { nullable: true })
  themes: Theme[];

  @Field(() => [Demographic], { nullable: true })
  demographics: Demographic[];
}
