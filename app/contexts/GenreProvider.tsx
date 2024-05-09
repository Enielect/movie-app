"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface GenreContextType {
  genreId: number;
  setGenreId: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext<GenreContextType | null>(null);

export default function GenreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [genreId, setGenreId] = useState<number>(0);
  return (
    <Context.Provider value={{ genreId, setGenreId }}>
      {children}
    </Context.Provider>
  );
}

export const useGenre = () => {
  const context = useContext(Context);
  return context;
};
