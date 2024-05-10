"use client";

import { createContext, useState } from "react";

export const Context = createContext<GenreContextType | null>(null);

export default function GenreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [genreId, setGenreId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Context.Provider value={{ genreId, setGenreId, loading, setLoading }}>
      {children}
    </Context.Provider>
  );
}
