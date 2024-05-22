"use client";

import MovieCard from "../ui/movie-card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../ui/Loader";
import { useFetchMoreMovies } from "../hooks/fetchMoreMovies";
import { BASE_URL } from "@/tmdb";
import { useState } from "react";

export default function TrendingWrapper({ movies }: { movies: Movies[] }) {
  const popularUrl = `${BASE_URL}/movie/popular?language=en-US`;
  const [TrendingMovies, setTrendingMovies] = useState(movies);
  const { hasMore, fetchMoreData } = useFetchMoreMovies(setTrendingMovies);
  return (
    <div className="p-[20px]">
      {/* <GoBack /> */}
      <h1 className="text-2xl py-[20px]">Trending Movies</h1>
      <InfiniteScroll
        dataLength={TrendingMovies.length}
        next={() => fetchMoreData(popularUrl)}
        hasMore={hasMore}
        loader={<Loader />}
      >
        {TrendingMovies.map((movie: Movies) => (
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
