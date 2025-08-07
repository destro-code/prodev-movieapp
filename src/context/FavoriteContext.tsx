// src/context/FavoriteContext.tsx
"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { Movie } from "@/types";

interface FavoritesContextValue {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined
);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavorites((curr) =>
      curr.some((m) => m.id === movie.id) ? curr : [...curr, movie]
    );
  };

  const removeFavorite = (id: number) => {
    setFavorites((curr) => curr.filter((m) => m.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((m) => m.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoriteProvider");
  return ctx;
}
