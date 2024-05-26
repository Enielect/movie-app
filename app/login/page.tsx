import { auth, signOut } from "@/auth";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default async function Page() {
  const session = await auth();
  const [guestSessionId, setGuestSessionId] = useState(null);

  useEffect(() => {
    if (session?.user) {
      // replace 'your-tmdb-api-key' with your actual TMDB API key
      axios
        .get(
          `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.TMDB_API_KEY}`
        )
        .then((response) => {
          setGuestSessionId(response.data.guest_session_id);
        })
        .catch((error) => {
          console.error("Error creating guest session id:", error);
        });
    }
  }, [session]);
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
