"use client";
import { Movie } from "@/types";
import { useFavorites } from "@/context/FavoriteContext";
import { motion } from "framer-motion";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-black rounded-lg shadow-lg p-4 flex flex-col text-white border border-red-700 hover:shadow-red-400 transition-shadow"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded mb-4 object-cover hover:opacity-90 transition-opacity duration-300"
      />

      <h2 className="text-lg font-semibold mb-2 line-clamp-1">{movie.title}</h2>
      <p className="text-sm text-gray-300 mb-4 line-clamp-3">
        {movie.overview}
      </p>

      <button
        onClick={() =>
          isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
        }
        className={`mt-auto py-2 px-4 rounded transition-all duration-300 text-sm font-medium ${
          isFavorite
            ? "bg-red-600 hover:bg-red-700"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {isFavorite ? "Remove Favorite" : "Add to Favorite"}
      </button>
    </motion.div>
  );
}
