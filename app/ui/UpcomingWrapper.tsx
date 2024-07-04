"use client";

import { BASE_URL } from "@/tmdb";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "@/app/ui/Loader";
import MovieCard from "@/app/ui/movie-card";
import { useFetchMoreMovies } from "@/app/hooks/fetchMoreMovies";

export default function UpcomingWrapper({ movies }: { movies: Movies[] }) {
  const upcomingUrl = `${BASE_URL}/movie/upcoming?language=en-US`;
  const [upComingMovies, setUpComingMovies] = useState(movies);
  const { hasMore, fetchMoreData } = useFetchMoreMovies(setUpComingMovies);
  const [viewportSize, setViewportSize] = useState<number>(0);

  useEffect(() => {
    // Function to update viewport size
    const updateViewportSize = () => {
      setViewportSize(window.innerHeight);
    };

    // Initial setting of viewport size
    updateViewportSize();

    // Event listener to update viewport size on window resize
    window.addEventListener("resize", updateViewportSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateViewportSize);
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
