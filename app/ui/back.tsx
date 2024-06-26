"use client";

import { useRouter } from "next/navigation";

export function GoBack() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-white w-[30px] h-[30px] grid place-items-center rounded-full z-20 ml-3 mt-4 fixed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: " rgba(0, 0, 0, 1)" }}
      >
        <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
      </svg>
    </button>
  );
}
