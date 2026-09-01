export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: 'SkyWings Aviation Academy',
    short_name: 'SkyWings',
    description:
      "Kerala's premium aviation college in Kochi & Mahe: BBA Aviation, MBA Aviation, Cabin Crew and Airport Management courses with 100% placement assistance.",
    start_url: '/',
    display: 'standalone',
    background_color: '#141922',
    theme_color: '#141922',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
