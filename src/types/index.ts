// src/types/index.ts
export interface Movie {
  id: number;
  title: string;
  original_title?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  release_date?: string | null; // YYYY-MM-DD
  vote_average?: number | null;
  vote_count?: number | null;
  popularity?: number | null;
  genre_ids?: number[]; 
  adult?: boolean;
  video?: boolean;
}

export interface MoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
