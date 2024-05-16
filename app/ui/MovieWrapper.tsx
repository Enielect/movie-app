"use client";

import { useContext, useEffect, useState } from "react";
import MovieCard from "./movie-card";
import axios from "axios";
import { Context } from "../contexts/GenreProvider";
import Loader from "./Loader";
import { useFetchMovies } from "../hooks/fetchMovies";

// { movies }: { movies: Movies[] }
export default function MovieWrapper() {
  const { genreId, loading, setLoading } = useContext(
    Context
  ) as GenreContextType;

  const { moviesGenreFilter } = useFetchMovies();

  return (
    <div>
      {loading && <Loader />}

      <div className="mx-[15px] flex flex-col gap-4 ">
        {!loading &&
          moviesGenreFilter.map((movie) => (
            <MovieCard
              key={movie.id}
              src={movie.poster_path}
              rating={movie.vote_average}
              title={movie.title}
              id={movie.id}
            />
          ))}
      </div>
    </div>
  );
}
