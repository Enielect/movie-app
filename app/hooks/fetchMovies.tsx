import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/GenreProvider";
import axios from "axios";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export function useFetchMovies() {
  const { genreId, loading, setLoading } = useContext(
    Context
  ) as GenreContextType;
  const [moviesGenreFilter, setMovies] = useState<Movies[]>([]);

  console.log(genreId, "this is the genre id");
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      const response = await axios.get(`${url}&with_genres=${genreId}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
        },
      });

      genreId !== 0 && setMovies(response.data.results);

      setLoading(false);
    }
    fetchMovies();
  }, [genreId]);

  useEffect(() => {
    console.log(moviesGenreFilter);
    console.log(genreId);
  }, [moviesGenreFilter, genreId]);

  return { moviesGenreFilter };
}
