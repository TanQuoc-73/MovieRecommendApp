import { Movie } from '@/types/movie';
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="group">
      <div className="relative overflow-hidden rounded-sm bg-[var(--bg-card)] transition-all duration-500 hover:scale-105 hover:shadow-[var(--shadow-lg)] border border-[var(--border-color)] hover:border-[var(--gold)]">
        {/* Ornamental corner accents */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[var(--gold)] opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[var(--gold)] opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
        
        {/* Poster Image */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[var(--gradient-card)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Gold frame effect on hover */}
          <div className="absolute inset-0 border-2 border-[var(--gold)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-gradient-primary backdrop-blur-sm px-3 py-1.5 rounded-sm flex items-center gap-1.5 border border-[var(--gold)] shadow-lg">
            <svg className="w-4 h-4 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-[var(--cream)]">{movie.rating}</span>
          </div>

          {/* Hover Overlay with "Xem chi tiết" */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent">
            <div className="btn btn-secondary text-xs px-4 py-2">
              Xem Chi Tiết
            </div>
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4 relative">
          {/* Top gold line */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30"></div>
          
          <h3 className="font-semibold text-base mb-2 line-clamp-1 group-hover:text-[var(--gold)] transition-colors font-heading">
            {movie.title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm mb-3 font-[var(--font-accent)] tracking-wider">
            {movie.releaseYear}
          </p>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-1.5">
            {movie.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="text-[10px] px-2 py-1 rounded-sm bg-gradient-to-r from-[var(--burgundy)]/20 to-[var(--navy)]/20 text-[var(--gold)] border border-[var(--border-gold)]/30 font-[var(--font-accent)] tracking-wider uppercase"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
