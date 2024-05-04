import Image from "next/image";

export default function MovieCard() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('movie.jpeg')" }}
        className="bg-image bg-cover bg-top relative rounded-lg w-full h-[400px] "
      >
        <div className="px-[10px] flex w-full justify-between absolute bottom-0">
          <span>movie_name</span>
          <span>rating</span>
        </div>
      </div>
    </div>
  );
}
