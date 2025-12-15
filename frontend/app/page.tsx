import HeroSection from '@/components/ui/HeroSection';
import MovieGrid from '@/components/ui/MovieGrid';
import { featuredMovies, trendingMovies, newReleases } from '@/libs/mockMovies';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection movie={featuredMovies[0]} />

      {/* Ornamental Divider */}
      <div className="container py-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30"></div>
          <span className="text-[var(--gold)] text-2xl">◆</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30"></div>
        </div>
      </div>

      {/* Trending Movies Section */}
      <section className="section ornament-border">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-[var(--gold)] text-sm font-[var(--font-accent)] tracking-[0.2em] uppercase block mb-2">Sưu Tập Đặc Biệt</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-[var(--cream)]">
                Phim Đang Thịnh Hành
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-12 h-px bg-[var(--gold)]"></div>
                <span className="text-[var(--gold)] text-xl">❖</span>
                <div className="w-12 h-px bg-[var(--gold)]"></div>
              </div>
            </div>
          </div>
          <MovieGrid movies={trendingMovies} />
          <div className="text-center mt-10">
            <Link href="/trending" className="btn btn-secondary">
              <span>Khám Phá Thêm</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="container py-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30"></div>
          <span className="text-[var(--gold)] text-2xl">◆</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30"></div>
        </div>
      </div>

      {/* New Releases Section */}
      <section className="section bg-[var(--bg-secondary)] ornament-border">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-[var(--gold)] text-sm font-[var(--font-accent)] tracking-[0.2em] uppercase block mb-2">Mới Ra Mắt</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-[var(--cream)]">
                Bộ Sưu Tập 2024
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-12 h-px bg-[var(--gold)]"></div>
                <span className="text-[var(--gold)] text-xl">❖</span>
                <div className="w-12 h-px bg-[var(--gold)]"></div>
              </div>
            </div>
          </div>
          <MovieGrid movies={newReleases.slice(0, 10)} />
          <div className="text-center mt-10">
            <Link href="/new-releases" className="btn btn-secondary">
              <span>Xem Toàn Bộ</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="container py-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30"></div>
          <span className="text-[var(--gold)] text-2xl">◆</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30"></div>
        </div>
      </div>

      {/* Recommendation CTA Section */}
      <section className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm bg-gradient-primary p-12 md:p-16 border-2 border-[var(--gold)]">
            {/* Ornamental corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[var(--gold)] opacity-40"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[var(--gold)] opacity-40"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[var(--gold)] opacity-40"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[var(--gold)] opacity-40"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="text-[var(--gold)] text-sm font-[var(--font-accent)] tracking-[0.2em] uppercase block mb-4">Dịch Vụ Cao Cấp</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-[var(--cream)]">
                Khám Phá Thế Giới Điện Ảnh
              </h2>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-px bg-[var(--gold)]"></div>
                <span className="text-[var(--gold)] text-2xl">❖</span>
                <div className="w-16 h-px bg-[var(--gold)]"></div>
              </div>
              <p className="text-lg mb-8 text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Để chúng tôi giúp quý vị tìm kiếm những tác phẩm điện ảnh tinh tế, 
                phù hợp với thị hiếu và sở thích riêng biệt của quý vị.
              </p>
              <Link href="/recommendations" className="btn btn-secondary inline-flex">
                <span>Nhận Gợi Ý Phim</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
            </div>
            
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle, var(--gold) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
