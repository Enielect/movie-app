import Link from "next/link";
import { BASE_IMAGE_URL } from "../constants/constants";

export default function MovieCard({
  title,
  src,
  rating,
  id,
  className
}: {
  title: string;
  src: string;
  rating: number;
  id: number;
  className: string;
}) {
  return (
    //learned how to use the transition better with tailwind for changing background size
    <Link href={`/moviedetail/${id}`} className={className}>
      <div
        style={{ backgroundImage: `url('${BASE_IMAGE_URL}${src}')` }}
        className="bg-image bg-cover bg-top relative rounded-lg w-full h-[400px] overflow-hidden duration-200 ease-in-out hover:bg-[length:105%]"
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
    </Link>
  );
}
