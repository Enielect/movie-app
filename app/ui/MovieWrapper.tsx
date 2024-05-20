"use client";

import { useContext, useEffect, useState } from "react";
import MovieCard from "./movie-card";
import axios from "axios";
import { Context } from "../contexts/GenreProvider";
import Loader from "./Loader";
import { useFetchMovies } from "../hooks/fetchMovies";
import InfiniteScroll from "react-infinite-scroll-component";

// { movies }: { movies: Movies[] }
export default function MovieWrapper() {
  const { loading } = useContext(Context) as GenreContextType;

  const { moviesGenreFilter, fetchMoreData, hasMore } = useFetchMovies();

  return (
    <div className="mx-[15px]">
      {loading && <Loader />}
      <InfiniteScroll
        hasMore={hasMore}
        dataLength={moviesGenreFilter.length}
        next={fetchMoreData}
        loader={<Loader />}
      >
        {/* we were having a problem with lagging in the scrolling and the solution was just to remove the div and render the elements directly */}
        {!loading &&
          moviesGenreFilter.map((movie) => (
            <MovieCard
              key={movie.id}
              src={movie.poster_path}
              rating={movie.vote_average}
              title={movie.title}
              id={movie.id}
              className="mx-[15px]"
            />
          ))}
      </InfiniteScroll>
    </div>
  );
}
