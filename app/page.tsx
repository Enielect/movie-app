import GenreList from "@/app/ui/mobile/genre-list";
import SearchMobile from "@/app/ui/mobile/search";
import MovieCard from "@/app/ui/movie-card";
import { fetchPopularMovies } from "@/tmdb";
import axios, { Axios } from "axios";

//wnat i noticed here, you can't use async/await in a client component.

export default async function Page() {
  const movies = await fetchPopularMovies();
  console.log(movies);

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
            rating={movie?.vote_average}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

/* fetch popular movies and pass them as props to the Home page */
