import { Movie } from '@/types/movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Movie[];
  title?: string;
}

export default function MovieGrid({ movies, title }: MovieGridProps) {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
