import axios from "axios";
import React, { useState } from "react";

export function useFetchMoreMovies(
  setMovies: React.Dispatch<React.SetStateAction<Movies[]>>
) {
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  const fetchMoreData = (url: string) => {
    axios
      .get(
        `${url}&page=${index}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      )
      .then((res) => {
        setMovies((prevItem) => [...prevItem, ...res.data.results]);
        res.data.results.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.error(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  return { fetchMoreData, hasMore };
}
