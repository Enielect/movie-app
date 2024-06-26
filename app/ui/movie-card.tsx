"use client";

import Link from "next/link";
import { BASE_IMAGE_URL } from "../constants/constants";
import { useState } from "react";

export default function MovieCard({
  title,
  src,
  rating,
  id,
  className,
}: {
  title: string;
  src: string;
  rating: number;
  id: number;
  className: string;
}) {
  const [favouriteSelected, setFavouriteSelected] = useState(false);
  return (
    //learned how to use the transition better with tailwind for changing background size
    <div className="md:w-[fit] relative group overflow-hidden">
      <Link href={`/moviedetail/${id}`} className={className}>
        <div
          style={{ backgroundImage: `url('${BASE_IMAGE_URL}/w500${src}')` }}
          className="bg-image bg-cover bg-top relative rounded-lg w-full h-[400px] overflow-hidden duration-200 ease-in-out hover:bg-[length:105%] box-shadow-element"
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

      <button
        className="absolute top-[26px] right-[10px]  z-10 "
        onClick={() => setFavouriteSelected((c) => !c)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(0,0,0,1)",
          }}
          className={`bg-white hover:scale-[1.2]  rounded-full p-[5px] `}
        >
          <path
            d={
              favouriteSelected
                ? "M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
                : `m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z`
            }
          ></path>
        </svg>
      </button>
    </div>
  );
}