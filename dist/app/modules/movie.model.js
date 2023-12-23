"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
    },
    release_date: {
        type: Date,
    },
    image_url: {
        type: String,
    },
    director: {
        type: String,
    },
});
exports.Movie = (0, mongoose_1.model)("Movie", movieSchema);
