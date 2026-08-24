import './globals.css';
import { sora, instrumentSans } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileWidget from '@/components/MobileWidget';
import { SITE_URL, SITE_NAME } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(''),
  title: {
    default: 'No.1 Premium Aviation College in Kerala | Skywings Academy',
    template: '%s',
  },
  icons: {
    icon: '/assets/images/skywings-aviation-academy-logo.png',
    apple: '/assets/images/skywings-aviation-academy-logo.png',
  },
};

export const viewport = {
  themeColor: '#141922',
  width: 'device-width',
  initialScale: 1,
};

// Site-wide Organization + LocalBusiness structured data
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: SITE_NAME,
  alternateName: ['SkyWings Academy of Aviation & Logistics', 'Best Aviation College in Kerala', 'No.1 Aviation College Kerala'],
  description:
    'No.1 Premium Aviation College in Kerala offering BBA Aviation, MBA Aviation, Diploma in Cabin Crew, Airline & Airport Management, BBA Logistics, and Aviation & Hospitality courses with 100% placement assistance in Kochi and Mahe.',
  url: SITE_URL,
  telephone: '+919847163163',
  email: 'info@skywingsacademy.com',
  priceRange: '₹₹',
  openingHours: 'Mo-Sa 09:00-18:00',
  logo: `${SITE_URL}/assets/images/skywings-aviation-academy-logo.png`,
  image: `${SITE_URL}/assets/opengraph/preview.webp`,
  address: [
    { '@type': 'PostalAddress', streetAddress: 'Ernakulam Campus', addressLocality: 'Kochi', addressRegion: 'Kerala', postalCode: '682001', addressCountry: 'IN' },
    { '@type': 'PostalAddress', streetAddress: 'Mahe Campus', addressLocality: 'Mahe', addressRegion: 'Puducherry', postalCode: '673310', addressCountry: 'IN' },
  ],
  geo: { '@type': 'GeoCoordinates', latitude: '9.9312', longitude: '76.2673' },
  sameAs: [
    'https://www.facebook.com/skywingsaviation/',
    'https://www.instagram.com/skywings_aviation_college/',
    'https://www.youtube.com/@Skywingsaviation',
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '250', bestRating: '5' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${instrumentSans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileWidget />
      </body>
    </html>
  );
}
