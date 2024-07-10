import Link from "next/link";
import React from "react";
import Instagramicon from '@/app/assets/svg/instagram';

const data1 = {

  title: "НАШІ КОНТАКТИ:",
  list_link: [
    { id: 1, text: "+38 (066) 867 58 78", href: "#" },
    { id: 2, text: "taraskokobi@gmail.com", href: "#" },
    { id: 3, text: "Львів, вул. Героїв УПА, 73Ж", href: "#" },
  ],
  icon:[
{id:1,src:'/svg/instagram.svg',alt:'instagram'},
{id:2,src:'/svg/instagram.svg',alt:'instagram'},
{id:3,src:'/svg/instagram.svg',alt:'instagram'},
]
};
const data2 = {

    title: "ЗВ’ЯЗАТИСЬ З НАМИ",
   
}
const data3 = {
  title: 'ІНФО',
  list_link: [
    { id: 9, text: 'ГОЛОВНА', href: '#', colspan: 'col-span-1' },
    { id: 10, text: 'ПРО КУРС', href: '#', colspan: 'col-span-1' },
    { id: 11, text: 'ПОРТФОЛІО АВТОРА', href: '#', colspan: 'col-span-2' },
    { id: 12, text: 'ПРО АВТОРА', href: '#', colspan: 'col-span-1' },
    { id: 13, text: 'ВАРТІСТЬ', href: '#', colspan: 'col-span-1' },
  ],
};



const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="   text-lg bg-yellow-400 pt-2 tablet:h-full ">
      <div className="grid grid-cols-1 gap-8 px-4 py-3 lg:py-4 md:grid-cols-3 mx-auto w-full max-w-screen-xl">
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{data1.title}</h3>
          <ul>
            {data1.list_link.map((link) => (
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
            {data1.icon.map((item) => (
              <li key={item.id}>
                <span className="sr-only">{item.alt}</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.alt}
                  title={item.alt}
                  href="#"
                  className="fill-black">
                  <Instagramicon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{data2.title}</h3>
          <form className="flex  flex-col justify-center " action="">
            <label className=" mb-6" htmlFor="">
              <input type="text" placeholder="Ваше ім'я" className="p-3  rounded-md bg-[#f2f3f7] w-full" />
            </label>
            <label className="mb-6 " htmlFor="">
              <input type="tel" placeholder="+38" className="p-3 rounded-md bg-[#f2f3f7] w-full" />
            </label>
            <label
              className="py-4 font-bold text-center   rounded-md text-text_header bg-background_btn  hover:bg-background_btn_hover "
              htmlFor="">
              <input value="ЗВ'ЯЗАТИСЬ" type="submit" />
            </label>
          </form>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{data3.title}</h3>
          <ul className="grid grid-cols-2 grid-rows-3 gap-1.5">
            {data3.list_link.map((link) => (
              <li key={link.id} className={`mb-4 ${link.colspan}`}>
                <a href={link.href} className= "hover:underline ">
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
            <Link href="terms_of_service">Умови надання послуг</Link>
          </span>
          <div>
            <span>ІПН</span>
          </div>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="tel:+380687003020">тел: +38 (066) 867 58 78</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
