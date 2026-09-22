import Image from 'next/image';
import { minicarousel } from '@/db/data';
export default function CarouselMini() {
  return (
    <div className="partner-strip" aria-label="Комерційні співпраці автора">
      {minicarousel.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt.replace('-logo', '')}
          width={170}
          height={45}
          sizes="140px"
        />
      ))}
    </div>
  );
}
