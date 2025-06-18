import Hero from '@/app/_components/section/Hero';
import WhoLeads from '@/app/_components/section/WhoLeads';
import Сertificate from '@/app/_components/section/Сertificate';
import Portfolio from '@/app/_components/section/Portfolio';
// import PortfolioStudent from '@/app/_components/section/PortfolioStudent';

function mentor() {
  return (
    <>
      <Hero />
      <WhoLeads />
      <Сertificate />
      <Portfolio />
      {/* <PortfolioStudent /> */}
    </>
  );
}

export default mentor;
