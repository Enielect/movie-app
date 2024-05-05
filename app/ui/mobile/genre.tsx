import { ReactElement } from "react";

export default function Genre({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-300 py-3 px-4 rounded-full w-fit  text-black">
      {children}
    </div>
  );
}
