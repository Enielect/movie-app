import { ReactElement } from "react";

//leartn how to write types like the one below
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Genre({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="bg-yellow-300 py-3 px-4 rounded-full w-fit  text-black"
    >
      {children}
    </button>
  );
}
