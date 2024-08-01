import React from 'react';

import InstagramIcon from '@/app/_components/common/InstagramIcon';
import FacebookIcon from '@/app/_components/common/FacebookIcon';
import TiktokIcon from '@/app/_components/common/TiktokIcon';

//Icon socials
export const icon = [
  { id: 1, src: 'https://www.instagram.com/serniukphoto/', alt: 'instagram', svg: <InstagramIcon /> },
  { id: 2, src: 'https://www.facebook.com/SerNiuK', alt: 'facebook', svg: <FacebookIcon /> },
  { id: 3, src: 'https://www.tiktok.com/@serniukphoto', alt: 'tiktok', svg: <TiktokIcon /> },
];

type StyleProps = {
  title: string;
  title2: string;
};

const SocialIcons = () => {
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
                className="fill-text_2 transition-colors duration-300 hover:fill-background_btn_hover">
                {item.svg}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialIcons;
