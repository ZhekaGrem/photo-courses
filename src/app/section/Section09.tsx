import React from 'react'
import Image from 'next/image';
const Section01 = () => {
  return (
    <section className="bg-[#00B0AB]">
      <div className="section container flex content-center">
        <div className="w-1/2">
          <Image src="/image-3.png" width={400} height={110} alt="kek" />
        </div>
        <div className="w-1/2">
          <Image src="/Rectangle-e1676897018833.png" width={520} height={465} alt="kek" />
        </div>
      </div>
    </section>
  );
}

export default Section01