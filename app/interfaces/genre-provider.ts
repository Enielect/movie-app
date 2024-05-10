interface GenreContextType {
    genreId: number;
    setGenreId: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }