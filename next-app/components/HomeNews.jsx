import Link from 'next/link';
import { POSTS } from '@/lib/posts';

/* Homepage "News & Articles" — latest 4 posts, server-rendered. */
export default function HomeNews() {
  return (
    <div className="sw-blog-grid" id="sw-blog-grid">
      {POSTS.slice(0, 4).map((p) => (
        <div className="sw-blog-card" key={p.slug}>
          <div className="sw-blog-card__img">
            <img src={p.image} alt={p.title} loading="lazy" />
          </div>
          <div className="sw-blog-card__body">
            <h4 className="sw-blog-card__title">{p.title}</h4>
            <p className="sw-blog-card__excerpt">{p.excerpt.slice(0, 120)}…</p>
            <Link href={`/${p.slug}`} className="sw-blog-card__link">Read More →</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
