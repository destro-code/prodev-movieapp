"use client";

import { useState } from "react";
import { genres } from "@/lib/genres";

export default function GenreFilter({
  onSelect,
}: {
  onSelect: (genreId: number) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex space-x-3 px-4 py-2">
        {genres.map((genre) => {
          const isActive = selected === genre.id;
          return (
            <button
              key={genre.id}
              onClick={() => {
                setSelected(genre.id);
                onSelect(genre.id);
              }}
              className={`
                flex-shrink-0 px-4 py-2 rounded-full font-medium transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black hover:bg-blue-50"
                }
              `}
            >
              {genre.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
