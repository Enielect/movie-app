import { create } from "zustand";

const initialState = { searchedMovies: [] };
const useSearchedStore = create((set) => ({
  ...initialState,
  setSearchedMovies: (movies: Movies[]) => set({ searchedMovies: movies }),
  reset: () => set(initialState),
}));

export default useSearchedStore;
