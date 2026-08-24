import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | SkyWings Aviation Academy',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        background: 'linear-gradient(135deg, #0c0e13 0%, #141922 60%, #2c3547 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
      }}
    >
      <div>
        <div style={{ fontFamily: 'var(--font-sora)', fontSize: 72, fontWeight: 300, color: '#c0a562', lineHeight: 1 }}>404</div>
        <div style={{ fontFamily: 'var(--font-sora)', fontSize: 22, fontWeight: 300, color: '#fefcfb', margin: '16px 0 8px' }}>
          This page has flown elsewhere.
        </div>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(254,252,251,0.55)', margin: '0 0 28px' }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            fontSize: 13.5,
            fontWeight: 500,
            textDecoration: 'none',
            padding: '12px 26px',
            borderRadius: 100,
            background: '#c0a562',
            color: '#0c0e13',
          }}
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
