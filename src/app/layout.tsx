import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/montserrat';
import '@/app/styles/globals.css';

import ClarityScript from '@/app/_components/scripts/ClarityScript';
import Footer from './_components/layout/Footer';
import Header from './_components/layout/Header';
import { PortalProvider } from '@/context/PortalContext';
import Script from 'next/script';

import BottomTabs from '@/app/_components/layout/BottomTabs';

const SITE_URL = 'https://www.screenphotoschool.com.ua';
const OG_IMAGE = `${SITE_URL}/assets/img/oleg.png`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Screen Photo School — онлайн-курси фотографії',
  description:
    'Два онлайн-курси Олега Сернюка: «Швидкий старт» для початківців і «PRO Світло» для роботи з освітленням. Програми, тарифи та роботи учнів.',
  openGraph: {
    title: 'Screen Photo School — навчіться створювати кадр',
    description:
      'Основи фотографії та робота зі світлом. Порівняйте два онлайн-курси й оберіть формат підтримки.',
    images: [OG_IMAGE],
    locale: 'uk_UA',
    type: 'website',
    siteName: 'Screen Photo School',
    url: `${SITE_URL}/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Школа Фотографії в Україні',
    description: 'Онлайн-курси «Швидкий старт» та «PRO Світло» від Олега Сернюка.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  authors: [{ name: 'Oleg Serniuk', url: `${SITE_URL}/mentor` }],
  verification: {
    google: 'zxibwP7y2X_bx4RJ4UMsueYaEauCBZ21uL_2hEaInYw',
  },
  other: {
    'msvalidate.01': 'E13D0F3684FAF860BAB7CA5C7428A209',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Screen Photo School',
  alternateName: 'Школа фотографії',
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  description: 'Онлайн-школа фотографії Олега Сернюка. Основи фотографії та робота зі світлом.',
  areaServed: 'UA',
  inLanguage: 'uk',
  telephone: '+380988758442',
  founder: {
    '@type': 'Person',
    name: 'Олег Сернюк',
  },
  sameAs: ['https://www.instagram.com/screen.school', 'https://www.instagram.com/serniukphoto'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-cloud_dancer">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB39DGF6"
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <a className="skip-link" href="#main-content">
          Перейти до змісту
        </a>
        <PortalProvider>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />

          <BottomTabs />

          <div id="portal-root" />
        </PortalProvider>
      </body>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-0SG93S79Y0" />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-0SG93S79Y0');
              `,
        }}
      />

      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NB39DGF6');
              `,
        }}
      />
      <ClarityScript />
    </html>
  );
}
