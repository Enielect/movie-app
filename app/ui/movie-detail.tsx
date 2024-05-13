import Image from "next/image";
import { GoBack } from "@/app/ui/back";
import { BASE_IMAGE_URL } from "../constants/constants";

//for now manage the Movies Type.
export default function MovieDetail({ movie }: { movie: Movies }) {
  return (
    <div>
      <GoBack />
      <span>{movie.title}</span>
      <div className="w-full">
        <Image
          src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
          width={300}
          height={200}
          alt="back-drop of movie"
          className="w-full"
        />
      </div>
      <div className="mt-[25px] ">
        <div className="px-[10px]">{movie.overview}</div>
        <div className="my-[30px] flex flex-col items-center">
          <div className="border mb-[30px] border-orange-600 bg-orange-400 text-white rounded-full w-fit px-3 py-3">
            Release Date: {movie.release_date}
          </div>
          {/* genre */}
          <ul className="flex gap-2">
            {movie.genres.map((genre) => (
              <li
                className="px-[10px] py-[8px] rounded-full w-fit text-white bg-orange-600"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* {credits.cast(cast => )} */}
      <div className="flex gap-6 w-full overflow-scroll">
        {movie.credits.cast.map((cast: Casts) => (
          <div key={movie.id} className="w-[550px]">
            <div className="w-[250px] ">
              <Image
                src={`${BASE_IMAGE_URL}${cast.profile_path}`}
                alt="casts"
                width={400}
                height={300}
                className="w-full h-[300px]"
              />
            </div>
            <p>{cast.original_name}</p>
            <p>({cast.character})</p>
          </div>
        ))}
      </div>
    </div>
  );
}
