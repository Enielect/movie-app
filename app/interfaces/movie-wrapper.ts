interface GenreContextType {
    genreId: number;
    setGenreId: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  interface Movies {
    title: string;
    poster_path: string;
    vote_average: number;
    id: number;
  }