"use client";

import useSearchedStore from "@/app/store/searchStore";
import axios from "axios";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchMobile() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback((value: string) => {
    if (value) params.set("search", value);
    else params.delete("search");

    replace(`${pathName}?${params.toString()}`);
  }, 300);

  //second time i am seeing the use of the as keyword in a type assertion
  const { setSearchedMovies } = useSearchedStore() as {
    setSearchedMovies: (movies: any[]) => void;
  };

  const search = params.get("search")?.toString();

  useEffect(() => {
    search ?? setSearchedMovies([]);
    search &&
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${params
            .get("search")
            ?.toString()}&include_adult=false&language=en-US&api_key=${
            process.env.NEXT_PUBLIC_TMDB_API_KEY
          }&page=1`
        )
        .then((res) => {
          // Handle the response here
          setSearchedMovies(res.data.results);
        });
  }, [search]);

  return (
    <div>
      <div className="w-full h-[120px] grid items-center background-gradient">
        <input
          className="mx-[20px] h-[35px] pl-[10px] rounded-xl text-lg tracking-wide text-black"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          defaultValue={searchParams.get("search")?.toString()}
          placeholder="Search Movie..."
        />
      </div>
    </div>
  );
}
