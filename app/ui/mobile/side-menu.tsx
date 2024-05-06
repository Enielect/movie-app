import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {
  return (
    <div className="py-[20px] flex flex-col justify-between items-center px-[20px] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-10">
      <div aria-label="logo">
        <Image src="/logo.png" width={80} height={80} alt="logo" />
      </div>
      <ul aria-label="links" className="w-full space-y-3">
        <li className="px-[20px] py-[10px] rounded-md w-full text-center  bg-orange-500 bg-opacity-40 border-orange-500 border">
          <Link href={"/"}>Genres</Link>
        </li>
        <li className="px-[20px] py-[10px] rounded-md text-center w-full bg-gray-500 bg-opacity-40">
          <Link href={"/trending"}>Trending</Link>
        </li>   
        <li className="px-[20px] py-[10px] rounded-md text-center w-full bg-gray-500 bg-opacity-40">
          <Link href={"/upcoming"}>Upcoming</Link>
        </li>
        <li className="px-[20px] py-[10px] rounded-md text-center w-full bg-gray-500 bg-opacity-40">
          <Link href={"/favourites"}>Favourites</Link>
        </li>
      </ul>
      <div className="px-[20px] py-[10px] rounded-md text-center w-full bg-orange-600 bg-opacity-40" aria-label="login">
        <Link href={"/login"}> Log in</Link>
      </div>
    </div>
  );
}
