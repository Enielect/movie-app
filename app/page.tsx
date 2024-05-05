import GenreList from "@/app/ui/mobile/genre-list";
import SearchMobile from "@/app/ui/mobile/search";
import MovieCard from "@/app/ui/movie-card";
import Button from "@/app/ui/Navigate_button";

export default function Page() {
  return (
    <div className="bg-white">
      <SearchMobile />
      <GenreList />
      <div className="mx-[15px] space-y-[10px]">
        {/* create an array with 20 empty elements */}
        {Array.from({ length: 20 }, (_, i) => (
          <MovieCard key={i} />
        ))}
        <Button className=" left-[15px] bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1);transform: ;msFilter:;" }}
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </Button>
        <Button className="right-[15px] bg-red-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: " rgba(0, 0, 0, 1);transform: ;msFilter:;" }}
          >
            <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
