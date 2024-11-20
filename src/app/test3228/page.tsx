import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <div className="relative h-screen w-full">
      <Image
        className="object-cover"
        loading="lazy"
        src="../assets/img/google.webp"
        alt="Портфоліо студентів, фотошкола, школа фотографії, курси фотографа"
        fill
        quality={100}
        sizes="100vw"
      />
    </div>
  );
}

export default page;
