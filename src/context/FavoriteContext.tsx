// src/context/FavoriteContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Movie } from "@/types";

type FavoritesContextType = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);
const STORAGE_KEY = "movieflix-favorites";

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // load from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch (err) {
      console.error("Failed to load favorites", err);
    }
  }, []);

  // persist on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error("Failed to persist favorites", err);
    }
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    setFavorites((curr) => {
      if (curr.some((m) => m.id === movie.id)) return curr;
      return [...curr, movie];
    });
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
