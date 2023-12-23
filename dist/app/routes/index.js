"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movie_route_1 = require("../modules/movie.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/movies",
        route: movie_route_1.MovieRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
