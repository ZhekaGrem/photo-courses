import type { Metadata } from 'next';
import Hero from '@/app/_components/section/Hero';
import WhoLeads from '@/app/_components/section/WhoLeads';
import Сertificate from '@/app/_components/section/Сertificate';
import Portfolio from '@/app/_components/section/Portfolio';

const SITE_URL = 'https://www.screenphotoschool.com.ua';

export const metadata: Metadata = {
  title: 'Про ментора | Олег Сернюк — Професійний фотограф',
  description:
    'Познайомтеся з Олегом Сернюком — досвідченим фотографом та ментором з 10-річним стажем. Львів, Україна.',
  alternates: { canonical: `${SITE_URL}/mentor` },
};

export const dynamic = 'force-static';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Олег Сернюк',
  alternateName: 'Oleg Serniuk',
  jobTitle: 'Фотограф, ментор',
  description: 'Професійний фотограф та ментор з 10-річним досвідом. Засновник Screen Photo School.',
  url: `${SITE_URL}/mentor`,
  image: `${SITE_URL}/assets/img/oleg.png`,
  worksFor: {
    '@type': 'EducationalOrganization',
    name: 'Screen Photo School',
    url: SITE_URL,
  },
  knowsAbout: ['Фотографія', 'Комерційна зйомка', 'Обробка', 'Композиція', 'Робота зі світлом'],
};

const breadcrumbsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Головна', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Ментор', item: `${SITE_URL}/mentor` },
  ],
};

function MentorPage() {
  return (
    <>
      <Hero />
      <WhoLeads />
      <Сertificate />
      <Portfolio />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
    </>
  );
}

export default MentorPage;
