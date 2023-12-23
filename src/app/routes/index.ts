import { Router } from "express";
import { MovieRoutes } from "../modules/movie.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/movies",
    route: MovieRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
