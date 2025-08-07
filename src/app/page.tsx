"use client";

import { useEffect, useState } from "react";
import { fetchMovies, fetchMoviesByGenre } from "@/lib/tmdb";
import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import GenreFilter from "@/components/GenreFilter";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async (query = "") => {
    const data = await fetchMovies(query);
    setMovies(data);
  };

  const loadGenre = async (genreId: number) => {
    const data = await fetchMoviesByGenre(genreId);
    setMovies(data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero / Search */}
      <section className="px-4 py-6 bg-red-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4">
          Movieflix
        </h1>
        <div className="max-w-2xl mx-auto">
          <SearchBar
            onSearch={loadMovies}
            className="w-full bg-gray-800 placeholder-gray-400 text-white focus:ring-red-500"
          />
        </div>
      </section>

      {/* Genre Filter */}
      {/* <section className="px-4 py-4 bg-gray-700">
        <div className="max-w-6xl mx-auto">
          <GenreFilter onSelect={loadGenre} />
        </div>
      </section> */}

      {/* Movie Grid */}
      <section className="flex-1 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {movies.length === 0 ? (
            <p className="text-center text-gray-400">No movies found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-gray-900 border border-red-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
