export interface Game {
  id: number | string;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url?: string;
}

export interface Filter {
  platform: string;
  genre?: string;
  tag?: string;
  sortBy: string;
}

export interface Response {
  games: Game[];
}

export interface GameDetailType {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  screenshots: Screenshot[];
}
