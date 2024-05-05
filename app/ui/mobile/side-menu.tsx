import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {
  return (
    <div className="py-[20px] px-[20px]">
      <div aria-label="logo">
        <Image src="/logo.png" alt="logo" />
      </div>
      <ul aria-label="links">
        <li>
          <Link href={"/"}>Genres</Link>
        </li>
        <li>
          <Link href={"/trending"}>Trending</Link>
        </li>   
        <li>
          <Link href={"/upcoming"}>Upcoming</Link>
        </li>
        <li>
          <Link href={"/favourites"}>Favourites</Link>
        </li>
      </ul>
      <div aria-label="login">
        <Link href={"/login"}> Log in</Link>
      </div>
    </div>
  );
}
