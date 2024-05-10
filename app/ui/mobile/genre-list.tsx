"use client";

import { Context } from "@/app/contexts/GenreProvider";
import Genre from "@/app/ui/mobile/genre";
import { BASE_URL } from "@/tmdb";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../Loader";

export default function GenreList() {
  const { genreId, setGenreId, setLoading } = useContext(
    Context
  ) as GenreContextType;
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreLoading, setGenreLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchGenres() {
      //error handling
      try {
        const genres = await axios.get(
          `${BASE_URL}/genre/movie/list?language=en&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        console.log(genres.data.genres);
        setGenres(genres.data.genres);
        setGenreLoading(false);

        console.log("the geres shown below", genres.data.genres);
      } catch (error) {
        console.error(error);
        console.log(error, "This is the error i am facing");
      }
    }
    fetchGenres();
  }, [genreId]);

  return (
    <div className="flex flex-wrap gap-[10px] justify-center pt-[10px] pb-[25px]">
      {genreLoading && <Loader />}
      {!genreLoading &&
        genres?.map((genre: Genre) => (
          <Genre
            onClick={() => {
              setGenreId(genre.id);
              setLoading(true);
            }}
            key={genre.id}
          >
            {genre.name}
          </Genre>
        ))}
    </div>
  );
}
