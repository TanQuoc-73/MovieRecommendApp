export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  releaseYear: number;
  rating: number;
  genres: string[];
  description: string;
  duration?: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface FilterOptions {
  genres: string[];
  yearRange?: {
    min: number;
    max: number;
  };
  ratingMin?: number;
}
