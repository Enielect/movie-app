import Image from "next/image";
import Link from "next/link";

export default function SideMenu({
  setIsModalOpen,
  currentRoute,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentRoute: string;
}) {
  const Links = ["Genres", "Trending", "Upcoming", "Favourites"];
  return (
    <div className="py-[20px] flex flex-col justify-between items-center px-[20px] fixed top-0 left-0 w-screen h-[100dvh] bg-black bg-opacity-90 z-10">
      <Link
        href="/"
        aria-label="logo"
        onClick={() => setIsModalOpen((c) => !c)}
      >
        <Image src="/logo.png" width={80} height={80} alt="logo" />
      </Link>
      <ul aria-label="links" className="w-full space-y-3">
        {Links.map((link) => (
          <li
            key={link}
            onClick={() => setIsModalOpen((c) => !c)}
            className={`px-[20px] py-[10px] rounded-md w-full text-center ${
              (!currentRoute && link.toLowerCase() == "genres") ||
              (currentRoute == link.toLowerCase() && "bg-orange-500 border-orange-500")
            }  hover:bg-orange-500   hover:border-orange-500 hover:bg-opacity-40 bg-gray-500 bg-opacity-40 border`}
          >
            <Link
              className="w-full inline-block"
              href={`/${
                link.toLowerCase() == "genres" ? "" : link.toLowerCase()
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
        {/* <li
          onClick={() => setIsModalOpen((c) => !c)}
          className="px-[20px] py-[10px] rounded-md w-full text-center  hover:bg-orange-500   hover:border-orange-500 hover:bg-opacity-40 bg-gray-500 bg-opacity-40 border"
        >
          <Link className="w-full inline-block" href={"/"}>
            Genres
          </Link>
        </li>
        <li
          onClick={() => setIsModalOpen((c) => !c)}
          className="px-[20px] py-[10px] rounded-md text-center w-full hover:bg-orange-500 hover:bg-opacity-40  hover:border-orange-500 border bg-gray-500 bg-opacity-40"
        >
          <Link className="w-full inline-block" href={"/trending"}>
            Trending
          </Link>
        </li>
        <li
          onClick={() => setIsModalOpen((c) => !c)}
          className="px-[20px] py-[10px] rounded-md text-center w-ful hover:bg-orange-500 hover:bg-opacity-40 hover:border-orange-500 border bg-gray-500 bg-opacity-40"
        >
          <Link className="w-full inline-block" href={"/upcoming"}>
            Upcoming
          </Link>
        </li>
        <li
          onClick={() => setIsModalOpen((c) => !c)}
          className="px-[20px] py-[10px] rounded-md text-center w-full hover:bg-orange-500 hover:bg-opacity-40 hover:border-orange-500 border bg-gray-500 bg-opacity-40"
        >
          <Link className="w-full inline-block" href={"/favourites"}>
            Favourites
          </Link>
        </li> */}
      </ul>
      <div
        className="px-[20px] py-[10px] rounded-md text-center w-full hover:bg-orange-500 hover:border-orange-500 border bg-orange-600 bg-opacity-40"
        aria-label="login"
      >
        <div onClick={() => setIsModalOpen((c) => !c)} className="w-full">
          <Link className="w-full block" href={"/login"}>
            {" "}
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
