"use client";

import { BASE_URL } from "@/tmdb";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import MovieCard from "./movie-card";
import { useFetchMoreMovies } from "../hooks/fetchMoreMovies";

export default function UpcomingWrapper({ movies }: { movies: Movies[] }) {
  const upcomingUrl = `${BASE_URL}/movie/upcoming?language=en-US`;
  const [upComingMovies, setUpComingMovies] = useState(movies);
  const { hasMore, fetchMoreData } = useFetchMoreMovies(setUpComingMovies);

  return (
    <div className="p-[20px]">
      <h1 className="text-2xl py-[20px]">Upcoming Movies</h1>
      <InfiniteScroll
        dataLength={upComingMovies.length}
        next={() => fetchMoreData(upcomingUrl)}
        hasMore={hasMore}
        loader={<Loader />}
        height={500}
      >
        {upComingMovies.map((movie: Movies) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            src={movie.poster_path}
            rating={movie.vote_average}
            title={movie.title}
            className="mx-[14px]"
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
