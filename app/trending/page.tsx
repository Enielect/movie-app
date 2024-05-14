import { GoBack } from "@/app/ui/back";
import { fetchPopularMovies } from "@/tmdb";
import MovieCard from "../ui/movie-card";

export default async function Page() {
  //fetch trending movies (popular movies)
  const movies = await fetchPopularMovies();

  return (
    <div className="p-[20px]">
      {/* <GoBack /> */}
      <h1 className="text-2xl py-[20px]">Trending Movies</h1>
      <div className="flex flex-col gap-[14px]">
        {movies.map((movie: Movies) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            src={movie.poster_path}
            rating={movie.vote_average}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
