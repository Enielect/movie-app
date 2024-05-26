import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FavouriteList() {
  const [favourites, setFavourties] = useState([]);
  const [requestToken, setRequestToken] = useState();

  useEffect(() => {
    async function fetchToken() {
      await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      ).then(res => setRequestToken(res.data));
    }
  });
  return (
    <div>
      <p>Give permission to connect you account with TMDB API <Link href={`https://www.themoviedb.org/authenticate/${requestToken}`}>click here</Link></p>
      <ul>
        {favourites.map((favourite: Movies) => (
          <li key={favourite.id}>{favourite.title}</li>
        ))}
      </ul>
    </div>
  );
}
