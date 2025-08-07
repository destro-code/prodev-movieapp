"use client";

import { useFavorites } from "@/context/FavoriteContext";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-screen bg-black text-white p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
        Your Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t added any favorites yet.
        </p>
      ) : (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie: Movie) => (
            <div
              key={movie.id}
              className="bg-white border border-blue-100 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
