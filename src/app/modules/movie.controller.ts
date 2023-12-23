import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { MovieServices } from "./movie.service";

const getAllMovies = catchAsync(async (req, res) => {
  const result = await MovieServices.getAllMoviesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Movie retrieve successfully",
    data: result,
  });
});

const getSingleMovie = catchAsync(async (req, res) => {
  const result = await MovieServices.getSingleMovieFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Movie data retrieve successfully",
    data: result,
  });
});

export const MovieControllers = {
  getAllMovies,
  getSingleMovie,
};
