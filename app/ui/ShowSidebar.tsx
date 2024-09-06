"use client";

import { useState } from "react";
import Button from "@/app/ui/Navigate_button";
import SideMenu from "@/app/ui/mobile/side-menu";
import { useWindowScroll } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";

export default function ShowSideBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [{ x, y }, scrollTo] = useWindowScroll();
  const pathname = usePathname();
  const currentRoute = pathname.split("/")[1];
  // const [scroll, setScroll] = useState(0);

  return (
    <div>
      <SideMenu
        display="mobile"
        isModalOpen={isModalOpen}
        currentRoute={currentRoute}
        setIsModalOpen={setIsModalOpen}
      />
      <Button
        className=" left-[15px] bg-blue-600 md:hidden z-20"
        onClick={() => setIsModalOpen((c) => !c)}
      >
        {!isModalOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)" }}
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)" }}
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        )}
      </Button>
      <Button
        className={`right-[15px] bg-red-300 ${
          y !== null && y > 6000 ? "block" : "hidden"
        }`}
        onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: " rgba(0, 0, 0, 1)" }}
        >
          <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
        </svg>
      </Button>
    </div>
  );
}
