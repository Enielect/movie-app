import GenreList from "@/app/ui/mobile/genre-list";
import SearchMobile from "@/app/ui/mobile/search";
import { fetchPopularMovies } from "@/tmdb";
import axios, { Axios } from "axios";
import GenreProvider from "./contexts/GenreProvider";
import MovieWrapper from "./ui/MovieWrapper";

//wnat i noticed here, you can't use async/await in a client component.

export default async function Page() {
  // console.log(movies);

  return (
    <div className="bg-[#03030a] overflow-auto">
      {/* included the genreprovider to update the genre id on click of a particular genre button */}
      {/* add the side menu */}
      <SearchMobile />
      <GenreList />
      <div>
        <MovieWrapper/>
      </div>
    </div>
  );
}

/* fetch popular movies and pass them as props to the Home page */
