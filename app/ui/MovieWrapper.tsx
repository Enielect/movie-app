"use client";

import { useContext, useEffect, useState } from "react";
import MovieCard from "./movie-card";
import axios from "axios";
import { Context } from "../contexts/GenreProvider";
import Loader from "./Loader";
import { url, useFetchMovies } from "../hooks/fetchMovies";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchMoreMovies } from "../hooks/fetchMoreMovies";
import useSearchedStore from "../store/searchStore";
import NetworkError from "./NetworkError";
import { BounceLoader } from "react-spinners";

// { movies }: { movies: Movies[] }
export default function MovieWrapper() {
  const { loading, genreId } = useContext(Context) as GenreContextType;
  const { moviesGenreFilter, setMovies, networkError } = useFetchMovies();
  const { fetchMoreData, hasMore } = useFetchMoreMovies(setMovies);
  const { searchedMovies } = useSearchedStore() as { searchedMovies: Movies[] };

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

  const genreUrl = `${url}&with_genres=${genreId}`;

  if (networkError) return <NetworkError />;
  return (
    <div className="overflow-auto h-full">
      <InfiniteScroll
        hasMore={hasMore}
        dataLength={moviesGenreFilter.length}
        next={() => fetchMoreData(genreUrl)}
        loader={
          <BounceLoader
            color="#ef7e15"
            loading={true}
            size={50}
            aria-label="loading Spinner"
            data-testid="loader"
          />
        }
        // style={{height: '40rem'}}
        height={viewportSize - 190}
      >
        {/* we were having a problem with lagging in the scrolling and the solution was just to remove the div and render the elements directly */}
        <div className="mx-[15px] md:grid md:grid-cols-3 gap-[15px] lg:grid-cols-4  ">
          {!loading && searchedMovies.length === 0
            ? moviesGenreFilter.map((movie) => (
                <MovieCard
                  key={movie.id}
                  src={movie.poster_path}
                  rating={movie.vote_average}
                  title={movie.title}
                  id={movie.id}
                  className="mx-[15px]"
                />
              ))
            : searchedMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  src={movie.poster_path}
                  rating={movie.vote_average}
                  title={movie.title}
                  id={movie.id}
                  className="mx-[15px]"
                />
              ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
