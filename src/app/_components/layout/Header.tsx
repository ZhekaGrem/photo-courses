'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../common/Button';
import BurgerIcon from '../common/BurgerIcon';
import { usePortal } from '@/context/PortalContext';
import { navlink, header } from '@/db/data';

type NavLinks = {
  id: number;
  name: string;
  href: string;
};

type InfoType = {
  btndata: string;
};

const dataLink: NavLinks[] = navlink;
const text: InfoType = header;

const Header = () => {
  const { setIsPortalOpen, setFormType } = usePortal();
  const [burgerMenu, setBurgerMenu] = useState(true);
  const handleBurgerButtonClick = () => {
    setBurgerMenu(!burgerMenu);
  };

  const openPortal = (formType: 'simple' | 'payment') => {
    setFormType?.(formType);
    setIsPortalOpen(true);
  };

  return (
    <header className={`absolute left-0 top-0 z-50 w-full text-text_header ${burgerMenu ? '' : 'text-2xl'}`}>
      <nav className="start-0 top-0 z-20 border-b bg-background_header">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              loading="lazy"
              className="h-auto min-w-32"
              width={100}
              height={20}
              src="/assets/logo/logo.png"
              alt="logo"
            />
          </Link>
          <div className="flex space-x-3 text-center font-bold lg:order-2 lg:space-x-0 rtl:space-x-reverse">
            <Button
              onClick={() => openPortal('simple')}
              className="hidden rounded-md bg-background_btn_burger px-6 sm:block"
              text={text.btndata}
            />
            <button
              type="button"
              className="kinline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-xs lg:hidden"
              onClick={handleBurgerButtonClick}>
              <span className="sr-only">Відкрити меню</span>
              <BurgerIcon />
            </button>
          </div>
          <div
            className={`w-full items-center justify-between lg:order-1 lg:flex lg:w-auto ${
              burgerMenu ? 'hidden' : 'bloc text-center text-3xl'
            }`}>
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-bold lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0">
              {dataLink.map((list) => (
                <li key={list.id} className={` ${burgerMenu ? '' : 'p-6'}`}>
                  <Link
                    onClick={handleBurgerButtonClick}
                    href={list.href}
                    className="block rounded px-3 py-2 hover:text-background_btn_hover lg:p-0">
                    {list.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button className=":block hidden rounded-md px-4 py-2" text="ЗАПИСАТИСЬ НА КУРС" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
