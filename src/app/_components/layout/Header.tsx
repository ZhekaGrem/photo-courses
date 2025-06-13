'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '../common/Button';
import BurgerIcon from '../common/BurgerIcon';
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
  // Fix: burgerMenu should start as closed (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Toggle burger menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close menu on link click
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle navigation with hash support
  const handleLinkClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      closeMenu();

      // Let Next.js Link handle the navigation naturally
      if (href.includes('#')) {
        const [path, hash] = href.split('#');
        const targetPath = path || '/';

        // If same page, prevent default and scroll manually
        if (pathname === targetPath) {
          e.preventDefault();
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          // Update URL without reload
          window.history.pushState(null, '', href);
        }
        // For different pages, let Link handle it naturally
      }
    },
    [pathname, closeMenu]
  );

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-lg text-text_header">
      <nav className="start-0 top-0 z-20 border-b bg-background_header">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
            <Image
              loading="lazy"
              className="h-auto min-w-32"
              width={100}
              height={20}
              src="/assets/logo/logo.png"
              alt="logo"
            />
          </Link>

          {/* Desktop CTA + Mobile Menu Toggle */}
          <div className="flex space-x-3 text-center font-bold lg:order-2 lg:space-x-0 rtl:space-x-reverse">
            {/* Desktop CTA Button */}
            <Button
              className="hidden rounded-md bg-background_btn_burger px-6 sm:block"
              text={text.btndata}
              openPortal={true}>
              {text.btndata}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-xs lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}>
              <span className="sr-only">{isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}</span>
              <BurgerIcon />
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`w-full items-center justify-between lg:order-1 lg:flex lg:w-auto ${
              isMenuOpen ? 'block text-center text-3xl' : 'hidden'
            } lg:block lg:text-lg`}>
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-bold lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0">
              {dataLink.map((link) => (
                <li key={link.id} className={isMenuOpen ? 'p-6 lg:p-0' : ''}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block rounded px-3 py-2 hover:text-background_btn_hover lg:p-0">
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile CTA Button */}
              <li className="block sm:hidden">
                <Button
                  className="mt-4 block rounded-md px-4 py-2"
                  text="ЗАПИСАТИСЬ НА КУРС"
                  openPortal={true}
                  onClick={closeMenu}>
                  ЗАПИСАТИСЬ НА КУРС
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
