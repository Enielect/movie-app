"use client";

import { useContext, useEffect, useState } from "react";
import MovieCard from "./movie-card";
import axios from "axios";
import { Context } from "../contexts/GenreProvider";
import Loader from "./Loader";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export default function MovieWrapper({ movies }: { movies: Movies[] }) {
  const { genreId, loading, setLoading } = useContext(
    Context
  ) as GenreContextType;
  const [moviesGenreFilter, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(`${url}&with_genres=${genreId}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
        },
      });
      console.log(response.data.results);
      setMovies(response.data.results);
      setLoading(false);
    }
    fetchMovies();
  }, [genreId]);

  return (
    <div className="mx-[15px] space-y-[10px]">
      {loading && <Loader />}

      {!loading &&
        moviesGenreFilter.length === 0 &&
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            src={movie.poster_path}
            rating={movie.vote_average}
            title={movie.title}
          />
        ))}
      {!loading &&
        moviesGenreFilter.length > 0 &&
        moviesGenreFilter.map((movie) => (
          <MovieCard
            key={movie.id}
            src={movie.poster_path}
            rating={movie.vote_average}
            title={movie.title}
          />
        ))}
    </div>
  );
}
