import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import './globals.css';

const DynamicFooter = dynamic(() => import('./_components/layout/Footer'), {
  loading: () => <p>Loading...</p>,
});
import Header from './_components/layout/Header';
import { PortalProvider } from './_components/layout/PortalContext';
import Script from 'next/script';
import Head from 'next/head';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const montrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Школа фотографії 📸 | Фотошкола | Курси фотографа',
  description:
    "Освоїти мистецтво фотографії з нуля. Практичні навички, робота зі світлом, композицією та обробкою. Старт кар'єри фотографа. Записуйтесь зараз!",
  keywords: [
    'курс фотографії, навчання фотографії, фотокурси для початківців, професійна фотографія, фотошкола, школа фотографії, курси фотографа',
    'курси',
    'фотограф',
    'Фотошкола',
    'Курси фотографа',
    'Школа фотографії ',
  ],
  openGraph: {
    title: 'Курс фотографії для початківців | Від основ до професіонала | Школа фотографії',
    description:
      'Навчіться створювати вражаючі фотографії, освоїте роботу з камерою та світлом. Практичні заняття та підтримка експертів.',
    images: ['https://www.screenphotoschool.com.ua/_next/static/media/larg.4c8625f1.jpg'],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    title: "Школа фотографії для початківців | Старт вашої кар'єри",
    description:
      'Отримайте навички професійного фотографа за 2 місяці. Практика, теорія, робота з реальними проектами.',
    images: ['https://www.screenphotoschool.com.ua/_next/static/media/larg.4c8625f1.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.screenphotoschool.com.ua/',
    languages: {
      uk: 'https://www.screenphotoschool.com.ua/',
    },
  },
  icons: {
    icon: ['/icon.ico'],
    shortcut: ['/icon.ico'],
    apple: ['/apple-touch-icon.png'],
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
      <Head>
        <meta name="google-site-verification" content="zxibwP7y2X_bx4RJ4UMsueYaEauCBZ21uL_2hEaInYw" />
        <meta property="og:url" content="https://www.screenphotoschool.com.ua/"></meta>
        <meta
          property="og:image"
          content="https://www.screenphotoschool.com.ua/_next/static/media/larg.4c8625f1.jpg"></meta>
        <GoogleTagManager gtmId="GTM-NB39DGF6" />
        <GoogleAnalytics gaId="G-0SG93S79Y0" />
      </Head>

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
                price: '500',
                priceCurrency: 'USD',
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
