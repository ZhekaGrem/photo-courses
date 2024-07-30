import Link from 'next/link';
import React from 'react';
import { footer } from '@/db/data';
import MiniFormFooter from '../form/MiniFormFooter';
import InstagramIcon from '@/app/components/common/InstagramIcon';
import FacebookIcon from '@/app/components/common/FacebookIcon';
import TiktokIcon from '@/app/components/common/TiktokIcon';

//Icon socials
const icon = [
  { id: 1, src: 'https://www.instagram.com/serniukphoto/', alt: 'instagram', svg: <InstagramIcon /> },
  { id: 2, src: 'https://www.facebook.com/SerNiuK', alt: 'facebook', svg: <FacebookIcon /> },
  { id: 3, src: 'https://www.tiktok.com/@serniukphoto', alt: 'tiktok', svg: <TiktokIcon /> },
];
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="tablet:h-full pt-2 text-lg">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-4 py-3 md:grid-cols-3 lg:py-4">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900">{footer.colum1.title}</h3>
          <ul>
            {footer.colum1.list_link.map((link) => (
              <li key={link.id} className="mb-4">
                <span className="sr-only">{link.text}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.text}
                  title={link.text}
                  className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
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
                  className="fill-black hover:fill-background_btn_hover">
                  {item.svg}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900">{footer.colum2.title}</h3>
          <MiniFormFooter />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900">{footer.colum3.title}</h3>
          <ul className="grid grid-cols-2 grid-rows-3 gap-1.5">
            {footer.colum3.list_link.map((link) => (
              <li key={link.id} className={`mb-4 ${link.colspan}`}>
                <a target="_blank" rel="noopener noreferrer" href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="container px-4 py-6 text-text_2 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p>&copy; {date} Євгеній Грем. Усі права захищено.</p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <a
              href="https://t.me/GremYevhenii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white">
              Зв`язатися з розробником
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
