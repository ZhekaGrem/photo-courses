import { Button } from '../common/Button';
import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
const SocialIcons = dynamic(() => import('@/app/_components/common/SocialIcons'), {
  loading: () => <Loading />,
  ssr: false,
});
const FirstTitle = dynamic(() => import('@/app/_components/common/FirstTitle'), {
  loading: () => <Loading />,
  ssr: false,
});

import { section_1 } from '@/db/data';

type SectionInfo = {
  title: string;
  title2: string;
  text?: string;
  button_text: string;
};

const data: SectionInfo = section_1;

const Hero = () => {
  return (
    <section className="imgBg flex min-h-screen bg-cover bg-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-12 text-text_2 lg:mb-0 lg:w-2/3">
            <FirstTitle title={data.title} title2={data.title2} />
            {/* prettier-ignore */}
            <div className="w-full pt-48 text-end xs:pt-56">
              <Button
                className="bg-background_btn_burger text-2xl font-bold transition-all duration-300 hover:underline sm:hidden rounded-full"
                text={data.button_text}
                openPortal={true}
              >{data.button_text}</Button>
            </div>
            {/* <div className="pt-20 md:pt-0 xl:pt-[40%]">
              <p className="max-w-[90%] font-bold sm:max-w-[70%] lg:text-2xl">{data.text}</p>
            </div> */}
          </div>
          <SocialIcons place="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
