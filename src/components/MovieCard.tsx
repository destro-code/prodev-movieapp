"use client";
import { Movie } from "@/types";
import { useFavorites } from "@/context/FavoriteContext";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="bg-white rounded p-4 shadow">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className="text-lg font-bold">{movie.title}</h2>
      <button
        onClick={() =>
          isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
        }
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isFavorite ? "Remove Favorite" : "Add to Favorite"}
      </button>
    </div>
  );
}
