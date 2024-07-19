import Link from "next/link";
import React from "react";
import {footer, icon} from '@/db/data';
import MiniFormFooter from "../form/MiniFormFooter";




const Footer = () => {
  return (
    <footer className="   text-lg bg-yellow-400 pt-2 tablet:h-full ">
      <div className="grid grid-cols-1 gap-8 px-4 py-3 lg:py-4 md:grid-cols-3 mx-auto w-full max-w-screen-xl">
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{footer.colum1.title}</h3>
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
                  className=" hover:underline">
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
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{footer.colum2.title}</h3>
          <MiniFormFooter/>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{footer.colum3.title}</h3>
          <ul className="grid grid-cols-2 grid-rows-3 gap-1.5">
            {footer.colum3.list_link.map((link) => (
              <li key={link.id} className={`mb-4 ${link.colspan}`}>
                <a href={link.href} className="hover:underline ">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="text-text_2  container px-4 py-6  md:flex md:items-center md:justify-between">
          <span className="text-sm  sm:text-center">
            <Link href="terms_of_service">{footer.horizontal_col.text_link}</Link>
          </span>
          <div>
            <span>{footer.horizontal_col.text2}</span>
          </div>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href={footer.horizontal_col.telephone}>{footer.horizontal_col.telephone_text}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
