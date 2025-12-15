'use client';

import { useState } from 'react';
import MovieGrid from '@/components/ui/MovieGrid';
import GenreFilter from '@/components/ui/GenreFilter';
import SearchBar from '@/components/ui/SearchBar';
import { recommendedMovies, genres } from '@/libs/mockMovies';
import { Movie } from '@/types/movie';

export default function RecommendationsPage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter movies based on selected genres and search query
  const filteredMovies = recommendedMovies.filter((movie) => {
    const matchesGenre =
      selectedGenres.length === 0 ||
      movie.genres.some((g) => selectedGenres.includes(g));
    const matchesSearch =
      searchQuery === '' ||
      movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              🎬 Gợi Ý Phim Dành Cho Bạn
            </h1>
            <p className="text-lg text-[var(--text-secondary)]">
              Khám phá những bộ phim tuyệt vời được chọn lọc dựa trên sở thích và lịch sử xem của bạn.
              Sử dụng bộ lọc bên dưới để tìm phim phù hợp nhất!
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="container">
          <div className="space-y-6">
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} placeholder="Tìm kiếm phim theo tên..." />
            
            {/* Genre Filter */}
            <GenreFilter
              genres={genres.map((g) => g.name)}
              selectedGenres={selectedGenres}
              onGenreToggle={handleGenreToggle}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Recommendation Stats */}
                <div className="card">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    Thống Kê
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Tổng gợi ý:</span>
                      <span className="font-semibold">{recommendedMovies.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Đã lọc:</span>
                      <span className="font-semibold">{filteredMovies.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Thể loại:</span>
                      <span className="font-semibold">{selectedGenres.length || 'Tất cả'}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="card bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-tertiary)]">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Mẹo Tìm Phim
                  </h3>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-secondary)] mt-1">•</span>
                      <span>Chọn nhiều thể loại để mở rộng gợi ý</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-secondary)] mt-1">•</span>
                      <span>Sử dụng thanh tìm kiếm để tìm phim cụ thể</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-secondary)] mt-1">•</span>
                      <span>Xem rating để chọn phim chất lượng cao</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Movies Grid */}
            <div className="lg:col-span-3">
              {filteredMovies.length > 0 ? (
                <MovieGrid
                  movies={filteredMovies}
                  title={`${filteredMovies.length} Phim Được Gợi Ý`}
                />
              ) : (
                <div className="text-center py-16">
                  <svg className="w-24 h-24 mx-auto mb-4 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Không Tìm Thấy Phim</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác
                  </p>
                  <button
                    onClick={() => {
                      setSelectedGenres([]);
                      setSearchQuery('');
                    }}
                    className="btn btn-primary"
                  >
                    Xóa Bộ Lọc
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Movies Section */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
            🎯 Phim Tương Tự
          </h2>
          <MovieGrid movies={recommendedMovies.slice(0, 5)} />
        </div>
      </section>
    </div>
  );
}
