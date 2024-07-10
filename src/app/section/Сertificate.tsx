import React from 'react'
import Image from 'next/image';
const Сertificate = () => {
  return (
    <section className="bg-background_section_4 ">
      <div className="container section flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-text_2 leading-tight mb-6">
            UKRAINIAN
            <br />
            ASSOCIATION
            <br />
            OF PROFESSIONAL
            <br />
            PHOTOGRAPHERS
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 transform -skew-y-6"></div>
            <h3 className="relative text-8xl lg:text-9xl font-black text-background_section_4 leading-none">
              UAPP
            </h3>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className=" overflow-hidden shadow-2xl border-8 border-yellow-400">
            <div className=" ">
              <Image
                src="/Rectangle-e1676897018833.png"
                width={520}
                height={465}
                alt="Сертифікат UAPP"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Сertificate;