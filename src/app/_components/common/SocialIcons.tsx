import React from 'react';

import InstagramIcon from '@/app/_components/common/InstagramIcon';
import FacebookIcon from '@/app/_components/common/FacebookIcon';
import TiktokIcon from '@/app/_components/common/TiktokIcon';
import TelegramIcon from '@/app/_components/common/TelegramIcon';

type SocialPlaceType = 'footer' | 'hero';

interface SocialIconsProps {
  place: SocialPlaceType;
}

type SocialType = 'instagram' | 'facebook' | 'tiktok' | 'telegram';

type IconType = {
  id: number;
  src: string;
  alt: string;
  svg: React.ReactNode;
  color: SocialType;
};

const hoverClasses = {
  instagram: 'hover:fill-instagram',
  facebook: 'hover:fill-facebook',
  tiktok: 'hover:fill-tiktok',
  telegram: 'hover:fill-telegram',
};

//Icon socials
export const icon: IconType[] = [
  {
    id: 1,
    src: 'https://www.instagram.com/serniukphoto/',
    alt: 'instagram',
    svg: <InstagramIcon />,
    color: 'instagram',
  },
  {
    id: 2,
    src: 'https://www.facebook.com/SerNiuK',
    alt: 'facebook',
    svg: <FacebookIcon />,
    color: 'facebook',
  },
  {
    id: 3,
    src: 'https://www.tiktok.com/@serniukphoto',
    alt: 'tiktok',
    svg: <TiktokIcon />,
    color: 'tiktok',
  },
  { id: 4, src: 'https://t.me/serniukphoto', alt: 'telegram', svg: <TelegramIcon />, color: 'telegram' },
];

const SocialIcons: React.FC<SocialIconsProps> = ({ place }) => {
  if (place === 'hero') {
    return (
      <div className="absolute right-0 top-72 lg:right-[21%]">
        <div className="mt-9 rounded-2xl p-5">
          <ul className="flex flex-col gap-y-6">
            {icon.map((item) => (
              <li key={item.id} className="transform transition-transform duration-300 hover:scale-110">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.alt}
                  title={item.alt}
                  href={item.src}
                  className={`fill-text_2 transition-colors duration-300 ${hoverClasses[item.color]}`}>
                  {item.svg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else if (place === 'footer') {
    return (
      <ul className="flex gap-x-4">
        {icon.map((item) => (
          <li key={item.id} className="transform transition-transform duration-300 hover:scale-110">
            <span className="sr-only">{item.alt}</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.alt}
              title={item.alt}
              href={item.src}
              className={`fill-slate-600 transition-colors duration-300 ${hoverClasses[item.color]}`}>
              {item.svg}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return null;
};
export default SocialIcons;
