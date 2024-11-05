import dynamic from 'next/dynamic';
import Loading from '@/app/loading';

const Hero = dynamic(() => import('@/app/_components/section/Hero'), { loading: () => <Loading /> });
const CourseProgram = dynamic(() => import('@/app/_components/section/CourseProgram'), {
  loading: () => <Loading />,
});
const WhoLeads = dynamic(() => import('@/app/_components/section/WhoLeads'), { loading: () => <Loading /> });
const Сertificate = dynamic(() => import('@/app/_components/section/Certificate'), {
  loading: () => <Loading />,
});
const Portfolio = dynamic(() => import('@/app/_components/section/Portfolio'), {
  loading: () => <Loading />,
});
const PortfolioStudent = dynamic(() => import('@/app/_components/section/PortfolioStudent'), {
  loading: () => <Loading />,
});
const Price2 = dynamic(() => import('@/app/_components/section/Price2'), { loading: () => <Loading /> });
// const PhonePortfolio = dynamic(() => import('@/app/_components/section/PhonePortfolio'), {
//   loading: () => <Loading />,
// });
// const CustomerSearch = dynamic(() => import('@/app/_components/section/CustomerSearch'), { loading: () => <Loading /> });
// const Price = dynamic(() => import('@/app/_components/section/Price'), { loading: () => <Loading /> });
// const Question = dynamic(() => import('@/app/_components/section/Question'), { loading: () => <Loading /> });

export default function Home() {
  return (
    <>
      <Hero />
      <WhoLeads />
      <CourseProgram />
      <Price2 />
      <Сertificate />
      {/* <CustomerSearch /> */}
      <Portfolio />
      {/* <PhonePortfolio /> */}
      {/* <Price /> */}
      <PortfolioStudent />
      {/* <Question /> */}
    </>
  );
}
