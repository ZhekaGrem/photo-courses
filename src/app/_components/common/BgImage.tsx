import Image from 'next/image';

const FullScreenImage = () => (
  <div className="relative h-screen w-full">
    <Image
      className="object-cover"
      loading="lazy"
      src="/BG_block2.png"
      alt="Портфоліо студентів, фотошкола, школа фотографії, курси фотографа"
      layout="fill"
      quality={100}
    />
  </div>
);

export default FullScreenImage;