import Image from "next/image";

export default function Header() {
  return (
    <div className="w-screen h-[80px] top-0 left-0">
      <nav className=" bg-white flex flex-row px-[20px] py-[10px] justify-between items-center">
        {/* <Image src="/movie.jpeg" alt="adventure movie" width={50} height={50} /> */}
        <ul className="flex flex-row text-black text-xl gap-[40px] ">
          <li>Genres</li>
          <li>Trending</li>
          <li>Upcoming</li>
          <li>Favourites</li>
        </ul>
        <div className="text-black">Sign In</div>
      </nav>
    </div>
  );
}
