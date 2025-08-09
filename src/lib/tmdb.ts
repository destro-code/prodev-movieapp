// src/lib/tmdb.ts
import { Movie, MoviesResponse } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL ?? "https://api.themoviedb.org/3";

export async function fetchMovies(query = "", page = 1): Promise<MoviesResponse> {
  const url = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();

  return {
    results: (data.results || []) as Movie[],
    page: data.page || page,
    total_pages: data.total_pages || 1,
    total_results: data.total_results || 0,
  };
}

export async function fetchMoviesByGenre(genreId: number, page = 1): Promise<MoviesResponse> {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch movies by genre");
  const data = await res.json();
  return {
    results: (data.results || []) as Movie[],
    page: data.page || page,
    total_pages: data.total_pages || 1,
    total_results: data.total_results || 0,
  };
}
export type { MoviesResponse };