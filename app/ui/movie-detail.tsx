import Image from "next/image";
import { GoBack } from "@/app/ui/back";
import { BASE_IMAGE_URL } from "../constants/constants";

//for now manage the Movies Type.
export default function MovieDetail({
  movie,
  backdrop,
}: {
  movie: Movies;
  backdrop: { file_path: string };
}) {
  return (
    <div className="w-[10px">
      <GoBack />
      <div className="w-full h-[30rem] md:h-[40rem] relative">
        <Image
          src={`${BASE_IMAGE_URL}/original${movie.backdrop_path}`}
          width={300}
          height={100}
          alt="back-drop of movie"
          className="w-full h-[25rem] md:h-[40rem] object-center"
        />
        <p className="absolute bottom-0 font-bold w-full text-3xl md:text-7xl text-center">
          {movie.title}
        </p>
      </div>
      <div className="mt-[25px] ">
        <div className="px-[20px] text-center text-xl">{movie.overview}</div>
        <div className="my-[30px] flex flex-col items-center">
          <div className=" mb-[30px] background-gradient p-[2px] bg-opacity-30 text-white rounded-full w-fit ">
            <div className="bg-[#242424] w-full h-full px-3 rounded-full py-3">
              Release Date: {movie.release_date}
            </div>
          </div>
          {/* genre */}
          <ul className="flex gap-2">
            {movie.genres.map((genre) => (
              <li
                className="px-[10px] py-[8px] rounded-full w-fit text-white bg-[#242424]"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* {credits.cast(cast => )} */}
      <p className="font-bold py-6 text-center text-2xl">Cast</p>
      <div className="flex gap-3 w-full px-3 overflow-auto">
        {movie.credits.cast.map((cast: Casts) => (
          <div key={movie.id}>
            <div className="w-[140px] rounded-md">
              <Image
                src={`${BASE_IMAGE_URL}/w500${cast.profile_path}`}
                alt="casts"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="text-center ">
              <p>{cast.original_name}</p>
              <p className="text-orange-500">({cast.character})</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center my-[20px]">
        <button className="px-3 py-3 flex bg-blue-400 items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-play-fill mr-2"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
          </svg>
          <span>Watch trailer</span>
        </button>
      </div>
    </div>
  );
}
