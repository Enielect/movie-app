import GenreList from "@/app/ui/mobile/genre-list";
import SearchMobile from "@/app/ui/mobile/search";
import MovieCard from "@/app/ui/movie-card";
import { fetchPopularMovies } from "@/tmdb";
import axios, { Axios } from "axios";

//wnat i noticed here, you can't use async/await in a client component.
const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUxZGVmODFmNzM1ZWUyODllNzZjMmI0MDA2NzRjMCIsInN1YiI6IjY2MzNmODIxZmU2YzE4MDEyMzJmNzYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5964Z8m7kUNy7gXpjD6xiFpCuosfy-_e5zss42l5iaI`,
};



export default async function Page() {
  const movies = await fetchPopularMovies();
  console.log(movies);
  //the fetch part that worked

  // const url =
  //   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUxZGVmODFmNzM1ZWUyODllNzZjMmI0MDA2NzRjMCIsInN1YiI6IjY2MzNmODIxZmU2YzE4MDEyMzJmNzYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5964Z8m7kUNy7gXpjD6xiFpCuosfy-_e5zss42l5iaI",
  //   },
  // };

  // const result = await fetch(url, options);
  // const data = await result.json();
  // const movies = data.results;

  //the fetch part that worked

  return (
    <div className="bg-white">
      {/* add the side menu */}
      <SearchMobile />
      <GenreList />
      <div className="mx-[15px] space-y-[10px]">

        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            src={movie?.poster_path}
            rating = {movie?.vote_average}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

/* fetch popular movies and pass them as props to the Home page */
