import Hero from '@/app/_components/section/Hero';
import WhoLeads from '@/app/_components/section/WhoLeads';
import Сertificate from '@/app/_components/section/Сertificate';
import Portfolio from '@/app/_components/section/Portfolio';

export const metadata = {
  title: 'Про ментора | Олег Сернюк - Професійний фотограф',
  description: 'Познайомтеся з Олегом Сернюком - досвідченим фотографом та ментором з 10-річним стажем',
};

// Статична сторінка для кращої швидкості
export const dynamic = 'force-static';

function MentorPage() {
  return (
    <>
      <Hero />
      <WhoLeads />
      <Сertificate />
      <Portfolio />
    </>
  );
}

export default MentorPage;
