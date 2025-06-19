import Image from 'next/image';
import { section_4 } from '@/db/data';

type SectionInfo = {
  text1: string;
  text2: string;
};

const data: SectionInfo = section_4;
const Сertificate = () => {
  return (
    <section className="bg-cloud_dancer">
      <div className="container mx-auto">
        <div className="section flex flex-col items-center lg:flex-row">
          <div className="mb-12 lg:mb-0 lg:w-1/2">
            <a href="https://ukrainianphotographers.com/" target="_blank" rel="noreferrer nofollow">
              <h3 className="mb-6 text-2xl font-bold leading-tight text-neon_navy drop-shadow-xl lg:text-4xl xl:text-5xl">
                {data.text1}
              </h3>
            </a>
            <div className="relative">
              <a href="https://ukrainianphotographers.com/" target="_blank" rel="noreferrer nofollow">
                <h3 className="relative text-6xl font-black leading-none text-neon_navy lg:text-8xl xl:text-9xl">
                  {data.text2}
                </h3>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2">
            <div className="w-full overflow-hidden border-8">
              <Image
                className="h-full w-full object-cover"
                loading="lazy"
                src="/assets/img/certifies.jpg"
                width={520}
                height={465}
                alt="Сертифікат UAPP"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Сertificate;
