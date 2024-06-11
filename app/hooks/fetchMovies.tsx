import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/GenreProvider";
import axios from "axios";

export const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc";

export function useFetchMovies() {
  const { genreId, loading, setLoading } = useContext(
    Context
  ) as GenreContextType;
  const [moviesGenreFilter, setMovies] = useState<Movies[]>([]);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      const response = await axios.get(`${url}&with_genres=${genreId}&page=1`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
        },
      });

      if (!response.data) {
        setNetworkError(true);
        return;
      }

      genreId !== 0 && setMovies(response.data.results);

      setLoading(false);
    }
    fetchMovies();
  }, [genreId]);



  return { moviesGenreFilter, setMovies, networkError };
}
