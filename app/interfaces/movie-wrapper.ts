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
  backdrop_path: string;
  overview: string;
  genres: Genre[];
  credits: Credits;
  release_date: string;
}

interface Casts {
  profile_path: string;
  original_name: string;
  character: string;
}

interface Credits {
  cast: Casts[];
}
