import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteStore {
  favorites: number[];
  toggle: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggle: (id) => {
        const { favorites } = get();
        set({
          favorites: favorites.includes(id)
            ? favorites.filter((x) => x !== id)
            : [...favorites, id],
        });
      },
    }),
    { name: 'movie-favorites' }
  )
);
