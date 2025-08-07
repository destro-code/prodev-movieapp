import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(query = '', genreId?: number) {
  const url = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    : `${BASE_URL}/discover/movie?api_key=${API_KEY}${
        genreId ? `&with_genres=${genreId}` : ''
      }`;

  const res = await axios.get(url);
  return res.data.results;
}

export async function fetchGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  const res = await axios.get(url);
  return res.data.genres;
}
export async function fetchMoviesByGenre(genreId: number) {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`, {
    next: { revalidate: 86400 },
  });
  const data = await res.json();
  return data.results;
}
