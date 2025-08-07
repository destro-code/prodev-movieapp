"use client";
import { useFavorites } from "@/context/FavoritesContext";
import MovieCard from "@/components/MovieCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
