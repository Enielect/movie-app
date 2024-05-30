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

// { movies }: { movies: Movies[] }
export default function MovieWrapper() {
  const { loading, genreId } = useContext(Context) as GenreContextType;
  const genreUrl = `${url}&with_genres=${genreId}`;

  const { moviesGenreFilter, setMovies } = useFetchMovies();
  const { fetchMoreData, hasMore } = useFetchMoreMovies(setMovies);
  const { searchedMovies } = useSearchedStore() as { searchedMovies: Movies[] };
  useEffect(() => console.log(searchedMovies), [searchedMovies]);

  return (
    <div className="overflow-auto h-full">
      {loading && <Loader />}
      <InfiniteScroll
        hasMore={hasMore}
        dataLength={moviesGenreFilter.length}
        next={() => fetchMoreData(genreUrl)}
        loader={<Loader />}
        // style={{height: '40rem'}}
        height={500}
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
