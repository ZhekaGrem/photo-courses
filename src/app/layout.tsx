import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { PortalProvider } from './components/layout/PortalContext';

const montrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Професійний курс фотографії для початківців | Стань експертом',
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
    card: 'summary_large_image',
    title: "Курс фотографії для початківців | Старт вашої кар'єри",
    description:
      'Отримайте навички професійного фотографа за 2 місяці. Практика, теорія, робота з реальними проектами.',
    images: ['https://example.com/twitter-image.jpg'],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com" />
        <meta name="author" content="screen" />
      </head>
      <body className={montrat.className}>
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
