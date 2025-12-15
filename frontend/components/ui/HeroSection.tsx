import { Movie } from '@/types/movie';
import Image from 'next/image';

interface HeroSectionProps {
  movie: Movie;
}

export default function HeroSection({ movie }: HeroSectionProps) {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden border-b-2 border-[var(--gold)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={movie.backdropUrl || movie.posterUrl}
          alt={movie.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay - darker for classic feel */}
        <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
        
        {/* Ornamental pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, var(--gold) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Ornamental corner borders */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[var(--gold)] opacity-40"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-[var(--gold)] opacity-40"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-[var(--gold)] opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[var(--gold)] opacity-40"></div>

      {/* Content */}
      <div className="container relative h-full flex items-center">
        <div className="max-w-3xl animate-[fadeIn_1s_ease-in-out]">
          {/* Ornamental top border */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-px bg-[var(--gold)]"></div>
            <span className="text-[var(--gold)] text-xl">❖</span>
            <div className="w-16 h-px bg-[var(--gold)]"></div>
          </div>

          {/* Featured Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-primary rounded-sm mb-6 border border-[var(--gold)] shadow-lg">
            <svg className="w-5 h-5 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-sm font-[var(--font-accent)] tracking-[0.15em] uppercase text-[var(--cream)]">
              Tuyển Tập Đặc Biệt
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading text-[var(--cream)] leading-tight">
            {movie.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-8 text-[var(--text-secondary)]">
            <span className="flex items-center gap-2 bg-[var(--bg-card)] px-4 py-2 rounded-sm border border-[var(--border-gold)]">
              <svg className="w-5 h-5 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold text-[var(--gold)]">{movie.rating}</span>
            </span>
            <span className="text-[var(--gold)] opacity-50">•</span>
            <span className="font-[var(--font-accent)] tracking-wider">{movie.releaseYear}</span>
            {movie.duration && (
              <>
                <span className="text-[var(--gold)] opacity-50">•</span>
                <span className="font-[var(--font-accent)] tracking-wider">{movie.duration} phút</span>
              </>
            )}
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-3 mb-8">
            {movie.genres.map((genre) => (
              <span key={genre} className="badge">
                {genre}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg text-[var(--text-secondary)] mb-10 line-clamp-3 leading-relaxed max-w-2xl">
            {movie.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Xem Ngay</span>
            </button>
            <button className="btn btn-secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Thêm Vào Bộ Sưu Tập</span>
            </button>
          </div>

          {/* Ornamental bottom border */}
          <div className="flex items-center gap-3 mt-10">
            <div className="w-16 h-px bg-[var(--gold)]"></div>
            <span className="text-[var(--gold)] text-xl">❖</span>
            <div className="w-16 h-px bg-[var(--gold)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
