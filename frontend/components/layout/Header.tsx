'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Trang Chủ', href: '/' },
    { label: 'Gợi Ý Phim', href: '/recommendations' },
    { label: 'Thể Loại', href: '/genres' },
    { label: 'Phim Mới', href: '/new-releases' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)] border-b-2 border-[var(--border-gold)] shadow-lg">
      <div className="container">
        {/* Ornamental top border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50"></div>
        
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-primary rounded-sm flex items-center justify-center border-2 border-[var(--gold)] shadow-lg">
                <svg
                  className="w-8 h-8 text-[var(--gold)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              {/* Corner ornaments */}
              <span className="absolute -top-1.5 -left-1.5 text-[var(--gold)] text-sm opacity-60">◆</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-[var(--gold)] text-sm opacity-60">◆</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-heading text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors tracking-wider leading-none">
                CineHub
              </span>
              <div className="text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase font-[var(--font-accent)] mt-1">
                Classic Cinema
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className="px-5 py-3 text-[var(--text-secondary)] hover:text-[var(--gold)] font-semibold transition-all duration-300 relative group text-sm tracking-[0.1em] uppercase"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent group-hover:w-full transition-all duration-300"></span>
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-[var(--gold)] opacity-20 text-sm mx-1">◆</span>
                )}
              </div>
            ))}
          </nav>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center gap-5">
            <button className="p-3 hover:bg-[var(--bg-tertiary)] rounded-sm transition-all duration-300 border border-transparent hover:border-[var(--gold)] group">
              <svg
                className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--gold)] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-primary">
              Đăng Nhập
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[var(--bg-tertiary)] rounded-sm transition-colors border border-[var(--gold)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--gold)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border-color)] animate-[fadeIn_0.3s_ease-in-out]">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 hover:bg-[var(--bg-tertiary)] rounded-sm transition-colors text-[var(--text-secondary)] hover:text-[var(--gold)] font-[var(--font-accent)] text-sm tracking-wider uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <button className="btn btn-primary w-full text-xs">
                  Đăng Nhập
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
