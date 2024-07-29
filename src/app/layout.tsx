import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { PortalProvider } from './components/layout/PortalContext';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
const montrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

const google_tag = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID as string;
// const google_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Школа фотографії',
  description:
    "Освоїти мистецтво фотографії з нуля. Практичні навички, робота зі світлом, композицією та обробкою. Старт кар'єри фотографа. Записуйтесь зараз!",
  keywords:
    'курс фотографії, навчання фотографії, фотокурси для початківців, професійна фотографія, фотошкола',
  openGraph: {
    title: 'Курс фотографії для початківців | Від основ до професіонала',
    description:
      'Навчіться створювати вражаючі фотографії, освоїте роботу з камерою та світлом. Практичні заняття та підтримка експертів.',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Курс фотографії для початківців',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    title: "Курс фотографії для початківців | Старт вашої кар'єри",
    description:
      'Отримайте навички професійного фотографа за 2 місяці. Практика, теорія, робота з реальними проектами.',
    images: ['https://example.com/twitter-image.jpg'],
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
      <Script id="schema-org" type="application/ld+json">
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
      {/*
      <GoogleAnalytics gaId={google_id} /> */}
      <body className={montrat.className}>
        <GoogleTagManager gtmId={google_tag} />
        <PortalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <div id="portal-root" />
        </PortalProvider>
      </body>
    </html>
  );
}
