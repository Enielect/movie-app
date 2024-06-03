"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-full w-full flex justify-center flex-col items-center">
      <h2>Something went wrong!</h2>
      <div className="">
        <button
          className="w-[100px] h-auto bg-green-500"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
