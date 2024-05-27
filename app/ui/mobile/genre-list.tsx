"use client";

import { Context } from "@/app/contexts/GenreProvider";
import Genre from "@/app/ui/mobile/genre";
import { BASE_URL } from "@/tmdb";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../Loader";

export default function GenreList() {
  const { genreId, setGenreId, setLoading, genres, setGenres } = useContext(
    Context
  ) as GenreContextType;
  const [genreLoading, setGenreLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchGenres() {
      //error handling

      try {
        // setGenreLoading(true);
        const genresFetch = await axios.get(
          `${BASE_URL}/genre/movie/list?language=en&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        console.log(genresFetch.data.genres);
        setGenres(genresFetch.data.genres);
        setGenreId(genresFetch.data.genres[1].id);
        setGenreLoading(false);

      } catch (error) {
        console.error(error);
      }
    }
    fetchGenres();
  }, []);

  console.log(genres)

  return (
    <div className="flex w-full overflow-auto gap-[10px] px-[9px] pt-[10px] pb-[25px]">
      {genreLoading && <Loader />}
      {!genreLoading &&
        genres?.map((genre: Genre) => (
          <Genre
            onClick={() => {
              setGenreId(genre.id);
              genreId !== genre.id && setLoading(true);
            }}
            key={genre.id}
            activeStyle={`${
              genreId === genre.id ? "border-[2px] border-white" : "border-none"
            }`}
          >
            {genre.name}
          </Genre>
        ))}
    </div>
  );
}
