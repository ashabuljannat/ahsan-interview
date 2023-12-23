import { Movie } from "./movie.model";

const getAllMoviesFromDB = async () => {
  const result = await Movie.find();
  //   console.log(result)
  return result;
};

const getSingleMovieFromDB = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

export const MovieServices = {
  getAllMoviesFromDB,
  getSingleMovieFromDB,
};
