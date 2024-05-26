import axios from "axios";

async function CreateGuestSession() {
  const response = await axios.post(
    "https://api.themoviedb.org/3/authentication/token/new",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  return response.data;
}
