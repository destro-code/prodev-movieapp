"use client";

import { useEffect, useState } from "react";
import { fetchMovies, fetchMoviesByGenre, MoviesResponse } from "@/lib/tmdb";
import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // merge existing + incoming while deduping by `id`
  function mergeDedupeById<T extends { id: number }>(
    existing: T[],
    incoming: T[]
  ) {
    const map = new Map<number, T>();
    // keep existing order
    for (const it of existing) map.set(it.id, it);
    // add/overwrite with incoming (won't change insertion order for duplicates)
    for (const it of incoming) map.set(it.id, it);
    return Array.from(map.values());
  }

  const loadMovies = async (q = "", p = 1, append = false) => {
    try {
      setLoading(true);
      setError(null);

      const data: MoviesResponse = await fetchMovies(q, p);

      setTotalPages(data.total_pages || 1);
      setPage(data.page || p);

      if (append) {
        setMovies((prev) => mergeDedupeById(prev, data.results as Movie[]));
      } else {
        setMovies(data.results as Movie[]);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load movies. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (q: string) => {
    setQuery(q);

    await loadMovies(q, 1, false);
  };

  const handleLoadMore = async () => {
    if (loading) return;
    if (page >= totalPages) return;
    const next = page + 1;
    await loadMovies(query, next, true);
  };

  useEffect(() => {
    void loadMovies("", 1, false);
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
            onSearch={handleSearch}
            className="w-full bg-gray-800 placeholder-gray-400 text-white focus:ring-red-500"
          />
        </div>
      </section>

      {/* Movie Grid */}
      <section className="flex-1 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {error && <p className="text-center text-red-400 mb-4">{error}</p>}

          {movies.length === 0 && !loading ? (
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

          {/* Load more / view more */}
          <div className="mt-8 flex justify-center items-center">
            {loading ? (
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white"
              >
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  />
                </svg>
                Loading...
              </button>
            ) : page < totalPages ? (
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition text-white"
              >
                View more
              </button>
            ) : (
              <p className="text-gray-400">
                You’re all caught up — no more movies.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
