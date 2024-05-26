import { auth, signOut } from "@/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default async function Page() {
  const session = await auth();

  return (
    <div className="w-full h-full">
      <h1 className="text-[18px] font-[18px] text-center my-[50px]">
        Movie app
      </h1>
      {session?.user ? (
        <div>
          <SignOut />
        </div>
      ) : (
        <div className="p-[10px] w-fit mx-auto border-white border-[1px]">
          <Link href="/api/auth/signin">Sign in</Link>
        </div>
      )}
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="grid place-items-center"
    >
      <button
        className="p-[10px] w-fit mx-auto border-white border-[1px]"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
