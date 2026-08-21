'use client';

import { useState } from 'react';
import Link from 'next/link';
import { POSTS } from '@/lib/posts';

const FILTERS = [
  { cat: 'all', label: 'All Posts' },
  { cat: 'career', label: 'Career Guide' },
  { cat: 'bba', label: 'BBA Aviation' },
  { cat: 'cabin-crew', label: 'Cabin Crew' },
  { cat: 'industry', label: 'Industry News' },
  { cat: 'placements', label: 'Placements' },
];

const ArrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function BlogSection() {
  const [filter, setFilter] = useState('all');
  const posts = filter === 'all' ? POSTS : POSTS.filter((p) => p.cat === filter);

  return (
    <>
      <div className="blg-filters">
        <div className="blg-wrap">
          <div className="blg-filters-inner">
            {FILTERS.map((f) => (
              <button
                key={f.cat}
                className={`blg-filter-btn${filter === f.cat ? ' active' : ''}`}
                data-cat={f.cat}
                onClick={() => setFilter(f.cat)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--offwhite)' }}>
        <div className="blg-wrap">
          <div className="blg-grid" id="blg-grid">
            {posts.length === 0 ? (
              <div className="blg-empty">No posts found in this category yet. Check back soon!</div>
            ) : (
              posts.map((p) => (
                <div className="blg-card" data-cat={p.cat} key={p.slug}>
                  <div className="blg-card__img">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="blg-card__cat">{p.catLabel}</span>
                  </div>
                  <div className="blg-card__body">
                    <div className="blg-card__date">{p.dateLabel}</div>
                    <div className="blg-card__title">{p.title}</div>
                    <div className="blg-card__excerpt">{p.excerpt}</div>
                    <Link href={`/${p.slug}`} className="blg-card__link">
                      Read Article {ArrowIcon}
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
