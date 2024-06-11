import GenreList from "@/app/ui/mobile/genre-list";
import SearchMobile from "@/app/ui/mobile/search";
import MovieWrapper from "./ui/MovieWrapper";
import { Suspense } from "react";
import Loader from "./ui/Loader";
import SideMenu from "./ui/mobile/side-menu";

//wnat i noticed here, you can't use async/await in a client component.

/**
 * Renders the Page component.
 *
 * @returns The rendered Page component.
 */
export default async function Page() {
  return (
    <div className="bg-[#03030a] md:grid overflow-hidden md:grid-cols-[250px_auto]">
      {/* included the genreprovider to update the genre id on click of a particular genre button */}
      {/* add the side menu */}

      <div className="hidden md:block">
        <SideMenu display="desktop" />
      </div>
      <div>
        <SearchMobile />
        <Suspense fallback={<Loader />}>
          <GenreList />
        </Suspense>
        <div className="overflow-auto">
          <MovieWrapper />
        </div>
      </div>
    </div>
  );
}

/* fetch popular movies and pass them as props to the Home page */
