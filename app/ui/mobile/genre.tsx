import { ReactElement } from "react";

export default function Genre({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-yellow-300 py-3 px-4 rounded-full w-fit  text-black">
      {children}
    </button>
  );
}
