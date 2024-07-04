"use client";

import MovieCard from "@/app/ui/movie-card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "@/app/ui/Loader";
import { useFetchMoreMovies } from "@/app/hooks/fetchMoreMovies";
import { BASE_URL } from "@/tmdb";
import { useEffect, useState } from "react";

export default function TrendingWrapper({ movies }: { movies: Movies[] }) {
  const popularUrl = `${BASE_URL}/movie/popular?language=en-US`;
  const [TrendingMovies, setTrendingMovies] = useState(movies);
  const { hasMore, fetchMoreData } = useFetchMoreMovies(setTrendingMovies);
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
      {/* <GoBack /> */}
      <h1 className="text-6xl font-bold py-[20px]">Trending Movies</h1>
      <InfiniteScroll
        dataLength={TrendingMovies.length}
        next={() => fetchMoreData(popularUrl)}
        hasMore={hasMore}
        loader={<Loader />}
        height={viewportSize - 80}
      >
        <div className="md:grid md:grid-cols-3 gap-[15px] lg:grid-cols-4">
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
        </div>
      </InfiniteScroll>
    </div>
  );
}
