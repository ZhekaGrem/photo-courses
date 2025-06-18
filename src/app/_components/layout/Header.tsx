'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '../common/Button';
import BurgerIcon from '../common/BurgerIcon';
import ExitBurgerIcon from '../common/ExitBurgerIcon';
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
    <header className="absolute left-0 top-0 z-50 w-full text-lg text-cloud_dancer">
      <nav className="start-0 top-0 z-20 border-b bg-pageant_blue">
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
              className="hidden rounded-md bg-cloud_dancer px-6 font-medium text-pageant_blue sm:block"
              text={text.btndata}
              openPortal={true}>
              {text.btndata}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-xs transition-all duration-300 ease-in-out lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}>
              <span className="sr-only">{isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}</span>
              {/* Icon container with rotation animation */}
              <div
                className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                {isMenuOpen ? <ExitBurgerIcon /> : <BurgerIcon />}
              </div>
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`w-full items-center justify-between overflow-hidden transition-all duration-300 ease-in-out lg:order-1 lg:flex lg:w-auto lg:overflow-visible lg:transition-none ${
              isMenuOpen ? 'block max-h-screen text-center text-3xl opacity-100' : 'hidden max-h-0 opacity-0'
            } lg:block lg:max-h-none lg:text-lg lg:opacity-100`}>
            <ul
              className={`mt-4 flex flex-col rounded-lg border p-4 font-bold transition-transform duration-300 ease-in-out lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 lg:transition-none ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-4'
              } lg:translate-y-0`}>
              {dataLink.map((link, index) => (
                <li
                  key={link.id}
                  className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'p-6 lg:p-0' : ''}`}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block rounded px-3 py-2 font-medium transition-colors duration-200 hover:text-background_btn_hover lg:p-0">
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile CTA Button with staggered animation */}
              <li
                className={`block justify-center p-6 transition-all duration-300 ease-in-out sm:hidden ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${dataLink.length * 50}ms` : '0ms',
                }}>
                <Button
                  className="block rounded-md px-4 py-2 font-medium transition-all duration-200 hover:scale-105"
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
