import Genre from "@/app/ui/mobile/genre";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentry",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

export default function GenreList() {
  return (
    <div className="flex flex-wrap gap-[10px] justify-center pt-[10px] pb-[25px]">
      {genres.map((genre) => (
        <Genre key={genre}>{genre}</Genre>
      ))}
    </div>
  );
}
