"use client";

import { Context } from "@/app/contexts/GenreProvider";
import Genre from "@/app/ui/mobile/genre";
import { BASE_URL } from "@/tmdb";
import axios from "axios";
import { CSSProperties, useContext, useEffect, useState } from "react";
import Loader from "../Loader";
import { BounceLoader } from "react-spinners";


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
        setGenres(genresFetch.data.genres);
        setGenreId(genresFetch.data.genres[0].id);
        setGenreLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGenres();
  }, []);

  return (
    <>
      {/* {genreLoading && <Loader />} */}
      <div className="flex md:flex-wrap items-center md:items-center md:justify-center overflow-auto gap-[10px] px-[9px] py-[15px]">
        {!genreLoading &&
          genres?.map((genre: Genre) => (
            <Genre
              onClick={() => {
                setGenreId(genre.id);
                genreId !== genre.id && setLoading(true);
              }}
              key={genre.id}
              activeStyle={`${
                genreId === genre.id ? "background-gradient " : "border-none"
              }`}
            >
              {genre.name}
            </Genre>
          ))}
      </div>
    </>
  );
}
