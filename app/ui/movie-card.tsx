import Image from "next/image";

const movie = {
  rating: 9,
  name: "Fighter",
};
export default function MovieCard() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('movie.jpeg')" }}
        className="bg-image bg-cover bg-top relative rounded-lg w-full h-[400px] "
      >
        <div className="px-[10px] flex w-full justify-between items-center pb-[10px] absolute bottom-0">
          <span className="font-bold text-lg tracking-wide">{movie.name}</span>
          <span
            className={`${
              movie.rating <= 5
                ? "text-red-600"
                : movie.rating > 5 && movie.rating < 8
                ? "text-blue-600"
                : "text-green-500"
            } bg-black px-4 font-bold text-xl py-2 rounded-full`}
          >
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
