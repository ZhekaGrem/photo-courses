import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import '@/app/styles/globals.css';

import Loading from '@/app/loading';
import ClarityScript from '@/app/_components/scripts/ClarityScript';
import Footer from './_components/layout/Footer';
import Header from './_components/layout/Header';
import { PortalProvider } from '@/context/PortalContext';
import Script from 'next/script';

const BottomTabs = dynamic(() => import('@/app/_components/layout/BottomTabs'), {
  loading: () => <Loading />,
  ssr: false,
});

const montrat = Montserrat({ subsets: ['latin', 'cyrillic'], adjustFontFallback: false, preload: true });

const SITE_URL = 'https://www.screenphotoschool.com.ua';
const OG_IMAGE = `${SITE_URL}/assets/img/oleg.png`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Школа фотографії 📸 | Фотошкола | Курси фотографа',
  description:
    'Курси фотографії в Україні ➤ Навчання з досвідченими фотографами  Від базових навичок до комерційної зйомки ✓ Практичні заняття ✓ Сертифікат ✓ Допомога у працевлаштуванні【Старт щомісяця】',
  openGraph: {
    title: 'Курси Фотографії в Україні ᐈ Навчання для початківців',
    description:
      '️Професійні курси фотографії ➤ 70% практики ➤ Робота з реальними проектами ➤ Підтримка 24/7 ➤ Портфоліо після навчання ➤ Допомога у старті карʼєри ✓ Бронюйте місце зараз',
    images: [OG_IMAGE],
    locale: 'uk_UA',
    type: 'website',
    siteName: 'Screen Photo School',
    url: `${SITE_URL}/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Школа Фотографії в Україні',
    description:
      '⭐ Стань професійним фотографом ➤ Сучасна програма навчання ➤ Практичні заняття ➤ Робота з брендами ➤ Сертифікат ✓ Записуйтесь',
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

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Курс фотографії для початківців',
  description:
    'Освоїти мистецтво фотографії з нуля. Практичні навички, робота зі світлом, композицією та обробкою.',
  url: `${SITE_URL}/`,
  provider: {
    '@type': 'Organization',
    name: 'Screen Photo School',
    url: SITE_URL,
    sameAs: SITE_URL,
  },
  category: ['Фотографія', 'Цифрове мистецтво', 'Візуальні медіа'],
  inLanguage: 'uk',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Onsite',
    courseWorkload: 'PT40H',
  },
  offers: [
    {
      '@type': 'Offer',
      category: 'Базовий експрес',
      name: 'Швидкий Старт — Базовий експрес',
      price: '1200',
      priceCurrency: 'UAH',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#price`,
    },
    {
      '@type': 'Offer',
      category: 'Базовий',
      name: 'Швидкий Старт — Базовий',
      price: '4000',
      priceCurrency: 'UAH',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#price`,
    },
    {
      '@type': 'Offer',
      category: "Зі зворотнім зв'язком",
      name: "Швидкий Старт — Зі зворотнім зв'язком",
      price: '6375',
      priceCurrency: 'UAH',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#price`,
    },
    {
      '@type': 'Offer',
      category: 'З наставником',
      name: 'Швидкий Старт — З наставником',
      price: '10000',
      priceCurrency: 'UAH',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#price`,
    },
  ],
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Screen Photo School',
  alternateName: 'Школа фотографії',
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  description:
    'Українська школа фотографії. Онлайн- та офлайн-курси для початківців і професіоналів. Львів, Україна.',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${montrat.className} bg-pageant_blue`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB39DGF6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <PortalProvider>
          <Header />
          <main>{children}</main>
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
