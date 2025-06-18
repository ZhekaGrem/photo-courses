import dynamic from 'next/dynamic';
import Loading from '@/app/loading';

const Hero = dynamic(() => import('@/app/_components/section/Hero'), {
  loading: () => <Loading />,
  ssr: true,
});
const CourseProgram = dynamic(() => import('@/app/_components/section/CourseProgram'), {
  loading: () => <Loading />,
  ssr: false,
});

const PortfolioStudent = dynamic(() => import('@/app/_components/section/PortfolioStudent'), {
  loading: () => <Loading />,
  ssr: false,
});
const Price2 = dynamic(() => import('@/app/_components/section/Price2'), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      {/* <WhoLeads /> */}
      <CourseProgram />
      <Price2 />
      {/* <Сertificate />
      <Portfolio />
      <PortfolioStudent /> */}
    </>
  );
}
