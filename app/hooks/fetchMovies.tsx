import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/GenreProvider";
import axios from "axios";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc";

export function useFetchMovies() {
  const { genreId, loading, setLoading } = useContext(
    Context
  ) as GenreContextType;
  const [moviesGenreFilter, setMovies] = useState<Movies[]>([]);
  const [index, setIndex] = useState(2);

  console.log(genreId, "this is the genre id");
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      const response = await axios.get(`${url}&with_genres=${genreId}&page=1`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
        },
      });

      genreId !== 0 && setMovies(response.data.results);

      setLoading(false);
    }
    fetchMovies();
  }, [genreId]);

  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    axios
      .get(`${url}&with_genres=${genreId}&page=${index}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
      .then((res) => {
        setMovies((prevItem) => [...prevItem, ...res.data.results]);
        res.data.results.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.error(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    console.log(moviesGenreFilter);
    console.log(genreId);
  }, [moviesGenreFilter, genreId]);

  return { moviesGenreFilter, fetchMoreData, hasMore };
}
