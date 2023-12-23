"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("./movie.controller");
const router = express_1.default.Router();
router.get("/", movie_controller_1.MovieControllers.getAllMovies);
router.get("/:id", movie_controller_1.MovieControllers.getSingleMovie);
exports.MovieRoutes = router;
