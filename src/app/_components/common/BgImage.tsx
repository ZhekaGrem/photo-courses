import Image from 'next/image';

const FullScreenImage = () => (
  <div className="relative h-screen w-full">
    <Image
      className="object-cover"
      loading="lazy"
      src="/assets/img/BG_block2.png"
      blurDataURL="/assets/img/BG_block2.png"
      alt="Портфоліо студентів, фотошкола, школа фотографії, курси фотографа"
      fill
      quality={100}
      sizes="100vw"
      placeholder="blur"
    />
  </div>
);

export default FullScreenImage;
