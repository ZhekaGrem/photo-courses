import dynamic from 'next/dynamic';
import Loading from '@/app/loading';

const Hero = dynamic(() => import('@/app/_components/section/Hero'), { loading: () => <Loading /> });
const CourseProgram = dynamic(() => import('@/app/_components/section/CourseProgram'), {
  loading: () => <Loading />,
  ssr: false,
});
const WhoLeads = dynamic(() => import('@/app/_components/section/WhoLeads'), { loading: () => <Loading /> });
const Сertificate = dynamic(() => import('@/app/_components/section/Сertificate'), {
  loading: () => <Loading />,
});
const Portfolio = dynamic(() => import('@/app/_components/section/Portfolio'), {
  loading: () => <Loading />,
});
const PortfolioStudent = dynamic(() => import('@/app/_components/section/PortfolioStudent'), {
  loading: () => <Loading />,
});
const Price2 = dynamic(() => import('@/app/_components/section/Price2'), { loading: () => <Loading /> });

export default function Home() {
  return (
    <>
      <Hero />
      <WhoLeads />
      <CourseProgram />
      <Price2 />
      <Сertificate />

      <Portfolio />

      <PortfolioStudent />
    </>
  );
}
