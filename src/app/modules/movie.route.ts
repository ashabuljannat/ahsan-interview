import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.get("/", MovieControllers.getAllMovies);

router.get("/:id", MovieControllers.getSingleMovie);

export const MovieRoutes = router;
