import { BounceLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="md:grid overflow-hidden h-screen w-screen ">
      <div className="flex justify-center items-center h-full w-full">
        <BounceLoader
          loading={true}
          color="#ef7e15"
          aria-label="loading Spinner"
          size={40}
        />
      </div>
    </div>
  );
}
