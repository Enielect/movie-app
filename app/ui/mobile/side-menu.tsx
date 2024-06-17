"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideMenu({
  setIsModalOpen,
  display,
}: {
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  display: string;
}) {
  const pathname = usePathname();
  const currentRoute = pathname.split("/")[1];
  console.log(pathname === '/')
  const Links = ["Genres", "Trending", "Upcoming", "Favourites"];

  const buttonProps: { onClick?: () => void } = {};
  if (display !== "desktop") {
    buttonProps.onClick = () => setIsModalOpen((c) => !c);
  }
  return (
    <div
      className={`py-[40px] flex flex-col justify-between items-center px-[20px] h-[100dvh] md:bg-[#03030a] top-0 left-0 ${display === 'mobile' && "w-screen h-[100dvh] fixed"} bg-black bg-opacity-90 z-10`}
    >
      <Link href="/" aria-label="logo" {...buttonProps}>
        <Image src="/logo.png" width={80} height={80} alt="logo" />
      </Link>
      <ul aria-label="links" className="w-full space-y-3">
        {Links.map((link) => (
          <li
            key={link}
            {...buttonProps}
            className={`px-[20px] py-[10px] rounded-md w-full text-center ${
              ((pathname === "/" && link.toLowerCase() == "genres") ||
              (currentRoute == link.toLowerCase())) &&
                "bg-orange-500 border-orange-500"
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
      </ul>
      <div
        className="px-[20px] py-[10px] rounded-md text-center w-full hover:bg-orange-500 hover:border-orange-500 border bg-orange-600 bg-opacity-40"
        aria-label="login"
      >
        <div {...buttonProps} className="w-full">
          <Link className="w-full block" href={"/login"}>
            {" "}
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
