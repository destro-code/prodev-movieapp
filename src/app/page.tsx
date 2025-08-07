"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "@/lib/tmdb";
import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async (query = "") => {
    const data = await fetchMovies(query);
    setMovies(data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <main className="p-8">
      <SearchBar onSearch={loadMovies} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
