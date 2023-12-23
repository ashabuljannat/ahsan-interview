import { Schema, model } from "mongoose";

const movieSchema = new Schema({
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

export const Movie = model("Movie", movieSchema);
