"use client";

import { BASE_URL } from "@/tmdb";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import MovieCard from "./movie-card";
import { useFetchMoreMovies } from "../hooks/fetchMoreMovies";

export default function UpcomingWrapper({ movies }: { movies: Movies[] }) {
  const upcomingUrl = `${BASE_URL}/movie/upcoming?language=en-US`;
  const [upComingMovies, setUpComingMovies] = useState(movies);
  const { hasMore, fetchMoreData } = useFetchMoreMovies(setUpComingMovies);
  const [viewportSize, setViewportSize] = useState<number>(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewportSize(window.innerHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setViewportSize(window.innerHeight);
      });
    };
  }, []);

  return (
    <div className="p-[20px]">
      <h1 className="text-6xl font-bold py-[20px]">Upcoming Movies</h1>
      <InfiniteScroll
        dataLength={upComingMovies.length}
        next={() => fetchMoreData(upcomingUrl)}
        hasMore={hasMore}
        loader={<Loader />}
        height={viewportSize - 80}
      >
        <div className="md:grid md:grid-cols-3 gap-[15px] lg:grid-cols-4">
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
        </div>
      </InfiniteScroll>
    </div>
  );
}
