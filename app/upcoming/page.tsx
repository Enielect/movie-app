import { GoBack } from "@/app/ui/back";
import axios from "axios";
import UpcomingWrapper from "@/app/ui/UpcomingWrapper";

async function fetchUpcoming() {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
}
export default async function Page() {
  const movies = await fetchUpcoming();
  return (
    <div>
      <UpcomingWrapper movies={movies} />
    </div>
  );
}
