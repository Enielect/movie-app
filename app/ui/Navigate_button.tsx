import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-[40px] h-[40px] rounded-full grid place-items-center fixed bottom-[20px]",
        className
      )}
    >
      {children}
    </button>
  );
}

positionC: ;