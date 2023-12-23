export interface Movie {
  _id: string;
  title: string;
  release_year: number;
  image: string;
  description: string;
  creator: {
    director: string;
    writer: string;
  };
  ratings: {
    imdb: number;
    tmdb: number;
  };
  cost_details: {
    budget: string;
    box_office_earnings: string;
  };
  category: {
    genre: string[];
    tags: string[];
  };
  cast: {
    actors: {
      character: string;
      actor: string;
      image: string;
    }[];
  };
}
