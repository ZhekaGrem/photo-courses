'use client';
import React, { useState } from 'react';
import Link from 'next/link'; 
import IconLogo from '../common/IconLogo';
import Image from 'next/image';
type NavLinks = {
  id: number;
  name: string;
  href: string;
};

const dataLink: NavLinks[] = [
  { id: 1, name: 'ПРОГРАММА', href: 'home' },
  { id: 2, name: 'ПРО АВТОРА', href: 'home' },
  { id: 3, name: 'ВАРТІСТЬ', href: 'home' },
];

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(!false);
  const handleBurgerButtonClick = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-ba text-slate-50 ${burgerMenu ? '' : 'text-2xl'}`}>
      <nav className="bg-[#A7DAD8] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 text-text_header">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              className="h-auto w-full  fill-white"
              width={80}
              height={80}
              src="/screen.svg"
              alt="logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-center">
            <div>
              СТАРТ НАСТУПНОГО <br /> ПОТОКУ: 24.04.2023
            </div>
            <button
              type="button"
              className="text-text_header bg-red1  hover:bg-texthover focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center  ">
              ЗАПИСАТИСЬ НА КУРС
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-[#A7DAD8]"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleBurgerButtonClick}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              burgerMenu ? 'hidden ' : 'bloc text-center text-3xl'
            }`}
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-[#A7DAD8]">
              {dataLink.map((list) => (
                <li key={list.id} className={` ${burgerMenu ? '' : 'p-6'}`}>
                  <Link href={list.href} className="block py-2 px-3  rounded  hover:text-texthover md:p-0 ">
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
