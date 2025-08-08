"use client";
import { useState } from "react";
import { Movie } from "@/types";
import { useFavorites } from "@/context/FavoriteContext";
import { motion } from "framer-motion";
import MovieModal from "./MovieModal";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const [open, setOpen] = useState(false);

  // Track if image failed to load
  const [imgError, setImgError] = useState(false);

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const rating =
    movie.vote_average !== undefined && movie.vote_average !== null
      ? movie.vote_average.toFixed(1)
      : "N/A";

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  const placeholderSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750' preserveAspectRatio='xMidYMid slice'>
    <rect width='100%' height='100%' fill='#0b0f13' />
    <g fill='#ef4444' opacity='0.06'>
      <rect x='40' y='40' width='120' height='18' rx='6'/>
      <rect x='40' y='68' width='80' height='10' rx='5'/>
    </g>
    <text x='50%' y='50%' fill='#94a3b8' font-family='Inter, Arial, sans-serif' font-size='20' text-anchor='middle' dominant-baseline='middle'>
      No Image
    </text>
  </svg>`;

  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
    placeholderSvg
  )}`;

  const imgSrc = posterUrl && !imgError ? posterUrl : placeholder;

  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-black rounded-lg shadow-lg p-4 flex flex-col text-white border border-red-700 hover:shadow-red-400 transition-shadow"
      >
        <img
          src={imgSrc}
          onError={() => setImgError(true)}
          alt={movie.title}
          loading="lazy"
          className="w-full h-auto rounded mb-4 object-cover hover:opacity-90 transition-opacity duration-300"
        />

        <h2 className="text-lg font-semibold mb-1 line-clamp-1">
          {movie.title}
        </h2>

        <div className="flex items-center text-sm text-gray-400 mb-2">
          <span className="mr-3">⭐ {rating}</span>
          <span>📅 {releaseYear}</span>
        </div>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {movie.overview || "No description available."}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            isFavorite ? removeFavorite(movie.id) : addFavorite(movie);
          }}
          className={`mt-auto py-2 px-4 rounded transition-all duration-300 text-sm font-medium ${
            isFavorite
              ? "bg-red-600 hover:bg-red-700"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {isFavorite ? "Remove Favorite" : "Add to Favorite"}
        </button>
      </motion.div>

      {open && <MovieModal movie={movie} onClose={() => setOpen(false)} />}
    </>
  );
}
