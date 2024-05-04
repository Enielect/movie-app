import GenreList from "@/app/ui/mobile/genre-list";
import SearchMobile from "@/app/ui/mobile/search";
import MovieCard from "@/app/ui/movie-card";

export default function Page() {
  return (
    <div className="bg-white">
      <SearchMobile />
      <GenreList />
      <div className="mx-[15px]">
        <MovieCard />
      </div>
    </div>
  );
}
