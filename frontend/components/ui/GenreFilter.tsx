'use client';

import { useState } from 'react';

interface GenreFilterProps {
  genres: string[];
  selectedGenres: string[];
  onGenreToggle: (genre: string) => void;
}

export default function GenreFilter({ genres, selectedGenres, onGenreToggle }: GenreFilterProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4">Lọc Theo Thể Loại</h3>
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
        {genres.map((genre) => {
          const isSelected = selectedGenres.includes(genre);
          return (
            <button
              key={genre}
              onClick={() => onGenreToggle(genre)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-gradient-primary text-white shadow-[var(--shadow-glow)]'
                  : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]'
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
