import { GoBack } from "@/app/ui/back";
import { fetchPopularMovies } from "@/tmdb";
import TrendingWrapper from "../ui/TrendingWrapper";

export default async function Page() {
  //fetch trending movies (popular movies)
  const movies = await fetchPopularMovies();
  return <TrendingWrapper movies={movies} />;
}
