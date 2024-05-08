import Image from "next/image";


const BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({
  title,
  src,
  rating,
}: {
  title: string;
  src: string;
  rating: number;
}) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${BASE_URL}${src}')` }}
        className="bg-image bg-cover bg-top relative rounded-lg w-full h-[400px] "
      >
        <div className="px-[10px] flex w-full justify-between items-center pb-[10px] absolute bottom-0">
          <span className="font-bold text-lg tracking-wide">{title}</span>
          <span
            className={`${
              rating <= 5
                ? "text-red-600"
                : rating > 5 && rating < 8
                ? "text-blue-600"
                : "text-green-500"
            } bg-black px-4 font-bold text-xl py-2 rounded-full`}
          >
            {Math.round(rating)}
          </span>
        </div>
      </div>
    </div>
  );
}
