import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import '@/app/styles/globals.css';

import Loading from '@/app/loading';
import ClarityScript from '@/app/_components/scripts/ClarityScript';
const BottomTabs = dynamic(() => import('@/app/_components/layout/BottomTabs'), {
  loading: () => <Loading />,
  ssr: false,
});

const DynamicFooter = dynamic(() => import('./_components/layout/Footer'), {
  loading: () => <Loading />,
  ssr: false,
});
import Header from './_components/layout/Header';
import { PortalProvider } from '@/context/PortalContext';
import Script from 'next/script';

const montrat = Montserrat({ subsets: ['latin', 'cyrillic'], adjustFontFallback: false, preload: true });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Школа фотографії 📸 | Фотошкола | Курси фотографа',
  description:
    'Курси фотографії в Україні ➤ Навчання з досвідченими фотографами ✓ Від базових навичок до комерційної зйомки ✓ Практичні заняття ✓ Сертифікат ✓ Допомога у працевлаштуванні【Старт щомісяця】',
  keywords:
    'курси фотографії львів, фотошкола, курси фотографа, школа фотографії, навчання фотографії, фотокурси для початківців, фотограф курси, фотошкола львів, уроки фотографії, курси фотографії для початківців',
  openGraph: {
    title: 'Курси Фотографії в Україні ᐈ Навчання для початківців【2024】',
    description:
      '️Професійні курси фотографії ➤ 70% практики ➤ Робота з реальними проектами ➤ Підтримка 24/7 ➤ Портфоліо після навчання ➤ Допомога у старті карʼєри ✓ Бронюйте місце зараз',
    images: ['https://www.screenphotoschool.com.ua/_next/static/media/google.84aede1a.webp'],
    locale: 'uk_UA',
    type: 'website',
    siteName: 'Screen Photo School',
    url: 'https://www.screenphotoschool.com.ua/',
  },
  twitter: {
    title: 'Школа Фотографії в Україні',
    description:
      '⭐ Стань професійним фотографом за 2 місяці ➤ Сучасна програма навчання ➤ Практичні заняття ➤ Робота з брендами ➤ Сертифікат ✓ Записуйтесь',
    images: ['https://www.screenphotoschool.com.ua/_next/static/media/google.84aede1a.webp'],
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
    canonical: 'https://www.screenphotoschool.com.ua/',
    languages: {
      uk: 'https://www.screenphotoschool.com.ua/',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  authors: [{ name: 'Oleg Serniuk', url: 'https://www.screenphotoschool.com.ua/about' }],
  verification: {
    google: 'zxibwP7y2X_bx4RJ4UMsueYaEauCBZ21uL_2hEaInYw',
  },
  other: {
    'google-site-verification': 'zxibwP7y2X_bx4RJ4UMsueYaEauCBZ21uL_2hEaInYw',
    'msvalidate.01': 'E13D0F3684FAF860BAB7CA5C7428A209',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={montrat.className}>
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
          <DynamicFooter />

          <BottomTabs />

          <div id="portal-root" />
        </PortalProvider>
      </body>
      <Script id="schema-org" type="application/ld+json" strategy="lazyOnload">
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
          category: ['Фотографія', 'Цифрове мистецтво', 'Візуальні медіа'],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'onsite',
            startDate: '2024-09-01',
            courseWorkload: 'PT40H',
          },
          offers: [
            {
              '@type': 'Offer',
              category: 'Базовий курс',
              name: 'Відеокурс "Швидкий Старт"',
              price: '3000',
              priceCurrency: 'UAH',
            },
            {
              '@type': 'Offer',
              category: 'Розширений курс',
              name: 'Відеокурс з менторством',
              price: '5500',
              priceCurrency: 'UAH',
            },
            {
              '@type': 'Offer',
              category: 'Індивідуальне навчання',
              name: 'Індивідуальна школа фотографії',
              price: '10000',
              priceCurrency: 'UAH',
            },
          ],
        })}
      </Script>
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
