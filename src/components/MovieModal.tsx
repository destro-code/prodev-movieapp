"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Movie } from "@/types";
import { useFavorites } from "@/context/FavoriteContext";

type Props = {
  movie: Movie;
  onClose: () => void;
};

export default function MovieModal({ movie, onClose }: Props) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((f) => f.id === movie.id);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${movie.title} details`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.18 }}
        className="relative max-w-3xl w-[94%] sm:w-3/4 bg-black text-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} // don't close when clicking inside
      >
        <div className="flex flex-col sm:flex-row">
          {/* Poster */}
          <div className="relative sm:w-1/3 w-full h-64 sm:h-auto bg-gray-900 flex items-center justify-center">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col">
            <header className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-red-400">
                  {movie.title}
                </h2>
                <div className="mt-1 text-sm text-gray-300">
                  <span className="mr-3">⭐ {movie.vote_average ?? "N/A"}</span>
                  <span>
                    📅{" "}
                    {movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : "N/A"}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
                }
                className={`ml-2 px-3 py-1 rounded text-sm font-medium transition ${
                  isFavorite
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-500 hover:bg-red-600"
                }`}
                aria-pressed={isFavorite}
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              >
                {isFavorite ? "Remove" : "Add"}
              </button>
            </header>

            <div className="mt-4 text-sm text-gray-200 flex-1 overflow-auto">
              <p className="leading-relaxed">
                {movie.overview ?? "No description available."}
              </p>
            </div>

            <footer className="mt-4 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 transition"
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
