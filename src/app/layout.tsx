import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from './_components/layout/Footer';
const DynamicFooter = dynamic(() => import('./_components/layout/Footer'), {
  loading: () => <p>Loading...</p>,
});
import Header from './_components/layout/Header';
import { PortalProvider } from './_components/layout/PortalContext';
import Script from 'next/script';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const montrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Школа фотографії',
  description:
    "Освоїти мистецтво фотографії з нуля. Практичні навички, робота зі світлом, композицією та обробкою. Старт кар'єри фотографа. Записуйтесь зараз!",
  keywords:
    'курс фотографії, навчання фотографії, фотокурси для початківців, професійна фотографія, фотошкола, школа фотографії',
  openGraph: {
    title: 'Курс фотографії для початківців | Від основ до професіонала | Школа фотографії',
    description:
      'Навчіться створювати вражаючі фотографії, освоїте роботу з камерою та світлом. Практичні заняття та підтримка експертів.',
    images: [
      {
        url: 'https://www.screenphotoschool.com.ua/_next/static/media/small.0cd81a37.jpg',
        width: 1200,
        height: 630,
        alt: 'Курс фотографії для початківців,  Школа фотографії',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    title: "Школа фотографії для початківців | Старт вашої кар'єри",
    description:
      'Отримайте навички професійного фотографа за 2 місяці. Практика, теорія, робота з реальними проектами.',
    images: ['https://www.screenphotoschool.com.ua/_next/static/media/small.0cd81a37.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.screenphotoschool.com.ua/',
    languages: {
      uk: 'https://www.screenphotoschool.com.ua/',
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  authors: [{ name: 'Oleg Serniuk' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <GoogleTagManager gtmId="GTM-NB39DGF6" />
        <GoogleAnalytics gaId="G-0SG93S79Y0" />
      </head>

      <body className={montrat.className}>
        <PortalProvider>
          <Header />
          <main>{children}</main>
          <DynamicFooter />
          <div id="portal-root" />
        </PortalProvider>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Курс фотографії для початківців',
            description:
              'Освоїти мистецтво фотографії з нуля. Практичні навички, робота зі світлом, композицією та обробкою.',
            provider: {
              '@type': 'Organization',
              name: 'Школа фотографії',
              sameAs: 'https://www.screenphotoschool.com.ua',
            },
          })}
        </Script>
      </body>
    </html>
  );
}
