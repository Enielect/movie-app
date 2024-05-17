import { GoBack } from "@/app/ui/back";
import MovieDetail from "@/app/ui/movie-detail";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  console.log(id)
  if (!params.id) return notFound();

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits  `
  );
  const movie = response.data;
  return (
    <div>
      <MovieDetail movie={movie} />
    </div>
  );
}
