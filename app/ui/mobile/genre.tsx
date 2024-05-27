import clsx from "clsx";
import { ReactElement } from "react";

//leartn how to write types like the one below
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  activeStyle: string;
}

export default function Genre({ children, activeStyle, ...rest }: ButtonProps) {
  return (
    <div className={clsx(" p-[2px] rounded-[9px] h-[35px] w-fit", activeStyle)}>
      <button
        {...rest}
        className={
          "bg-yellow-300 rounded-[9px] px-[5px] whitespace-nowrap w-fit text-black h-full"
        }
      >
        {children}
      </button>
    </div>
  );
}
