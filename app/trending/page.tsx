import { GoBack } from "@/app/ui/back";
import { fetchPopularMovies } from "@/tmdb";
import MovieCard from "../ui/movie-card";

export default async function Page() {
  //fetch trending movies (popular movies)
  const movies = await fetchPopularMovies();

  return (
    <div>
      <GoBack />
      {movies.map((movie: Movies) => (
        <MovieCard
          key={movie.id}
          src={movie.poster_path}
          rating={movie.vote_average}
          title={movie.title}
        />
      ))}
    </div>
  );
}
