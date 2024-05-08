// import Moviestmdb from "moviestmdb";

//creatinh a TMDB api service
// const tmdb = new Moviestmdb(process.env.TMDB_API_KEY);

import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

//learning how to use environment 
const READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN;

const headers = {
  Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
};

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?language=en-US&page=1`,
      {
        headers,
      }
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    console.log(error.message);
    throw new Error("Failed to fetch popular movies");
  }
};
