'use client';
import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import Button from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';
import { navlink, header } from '@/db/data';
import { type } from 'os';

type NavLinks = {
  id: number;
  name: string;
  href: string;
};

type InfoType = {
  startdata1: string;
  startdata2: string;
  btndata:string;
};

const dataLink: NavLinks[] = navlink;
const text: InfoType = header;

const Header = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();
  const [burgerMenu, setBurgerMenu] = useState(!false);
  const handleBurgerButtonClick = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <header
      className={`w-full absolute top-0 left-0 z-50 bg-ba text-text_header ${burgerMenu ? '' : 'text-2xl'}`}>
      <nav className="bg-background_header  w-full z-20 top-0 start-0 border-b   ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              loading="lazy"
              className="h-auto w-full  "
              width={80}
              height={80}
              src="/screen.svg"
              alt="logo"
            />
          </a>
          <div className=" font-bold flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse text-center">
            <div className="hidden md:block text-xs mr-3">
              {text.startdata1}
              <br />
              {text.startdata2}
            </div>
            <Button
              onClick={() => setIsPortalOpen(true)}
              className="px-6 py-2 hidden sm:block"
              text={text.btndata}
            />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="  kinline-flex items-center p-3 w-10 h-10 justify-center text-xs  rounded-lg lg:hidden bg-background_btn hover:bg-background_btn_hover  focus:outline-none focus:ring-2  "
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleBurgerButtonClick}>
              <span className="sr-only">Відкрити меню</span>
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
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              burgerMenu ? 'hidden ' : 'bloc text-center text-3xl'
            }`}
            id="navbar-sticky">
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-bold border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
              {dataLink.map((list) => (
                <li key={list.id} className={` ${burgerMenu ? '' : 'p-6'}`}>
                  <Link
                    href={list.href}
                    className="block py-2 px-3  rounded  hover:text-background_btn_hover lg:p-0 ">
                    {list.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button className="px-4 py-2 hidden :block" text="ЗАПИСАТИСЬ НА КУРС" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
