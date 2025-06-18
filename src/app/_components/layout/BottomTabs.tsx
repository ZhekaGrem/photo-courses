'use client';

import { usePortal } from '@/context/PortalContext';
import { useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const tabs = [
  { name: 'Швидкий старт', href: '/#faststart', id: 'faststart', isExternal: true },
  { name: 'PRO Світло', href: '/#prosvitlo', id: 'prosvitlo', isExternal: true },
  { name: 'Відгуки', href: '/feedback', id: 'feedback', isExternal: true },
];

const BottomTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { variantId, setVariantId } = usePortal();
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Initialize variant from URL params and current route
  useEffect(() => {
    const variant = searchParams.get('variant');
    const hash = window.location.hash.replace('#', '');

    if (variant && setVariantId) {
      setVariantId(variant);
    } else if (hash && setVariantId) {
      // Set variant from hash
      setVariantId(hash);
    } else if (pathname === '/mentor' && setVariantId) {
      // Set variant for mentor page
      setVariantId('mentor');
    }
  }, [searchParams, pathname, setVariantId]);

  // Smooth scroll with retry mechanism
  const scrollToElement = useCallback((elementId: string) => {
    const scrollWithRetry = (attempts = 0) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      // Retry up to 3 times with increasing delays
      if (attempts < 3) {
        timeoutRef.current = setTimeout(
          () => {
            scrollWithRetry(attempts + 1);
          },
          50 * (attempts + 1)
        );
      }
    };

    scrollWithRetry();
  }, []);

  // Navigation handler with proper routing logic
  const handleTabClick = useCallback(
    (tab: (typeof tabs)[0]) => {
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (tab.isExternal) {
        if (tab.href.includes('#')) {
          const [path, hash] = tab.href.split('#');
          const targetPath = path || '/';

          if (pathname !== targetPath) {
            // Navigate to different page with hash
            router.push(tab.href);
            if (setVariantId && hash) {
              setVariantId(hash);
            }
          } else {
            // Same page, just update hash
            router.replace(`${targetPath}#${hash}`, { scroll: false });
            if (hash) {
              scrollToElement(hash);
              if (setVariantId) {
                setVariantId(hash);
              }
            }
          }
        } else if (tab.href.startsWith('/')) {
          // Navigate to different page without hash
          router.push(tab.href);
          if (setVariantId) {
            setVariantId(tab.id);
          }
        }
      }
    },
    [pathname, router, setVariantId, scrollToElement]
  );

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Determine active tab based on variantId (which now includes page routes)
  const getActiveState = useCallback(
    (tab: (typeof tabs)[0]) => {
      return variantId === tab.id;
    },
    [variantId]
  );

  return (
    <div className="sticky bottom-4 left-1/2 z-10 w-auto max-w-md -translate-x-1 px-10 sm:left-1/3 sm:translate-x-0 sm:px-3 lg:left-1/2 lg:-translate-x-1/2">
      <nav className="animate-tilt-shaking rounded-full bg-background_btn_burger">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between p-1">
          <ul className="flex w-full justify-between">
            {tabs.map((tab) => {
              const isActive = getActiveState(tab);

              return (
                <motion.li
                  key={tab.id}
                  className="relative flex items-center font-bold text-white hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
                  {/* Active tab background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 rounded-2xl bg-background_btn"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}

                  <button
                    onClick={() => handleTabClick(tab)}
                    className="relative z-10 block rounded-2xl p-1 text-center text-xs font-medium shadow-lg transition duration-300 ease-in-out md:p-2"
                    aria-label={`Navigate to ${tab.name}`}>
                    <motion.span
                      className={`p-1 font-semibold transition-colors duration-300 md:text-base ${
                        isActive ? 'text-background_btn_burger' : 'text-white hover:text-black'
                      }`}
                      animate={{
                        color: isActive ? 'var(--background-btn-burger)' : 'white',
                      }}
                      transition={{ duration: 0.3 }}>
                      {tab.name}
                    </motion.span>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BottomTabs;
