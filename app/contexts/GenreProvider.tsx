"use client";

import { createContext, useState } from "react";

export const Context = createContext<GenreContextType | null>(null);

export default function GenreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [genreId, setGenreId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genre[]>([]);

  return (
    <Context.Provider value={{ genreId, setGenreId, loading, setLoading, genres, setGenres }}>
      {children}
    </Context.Provider>
  );
}
