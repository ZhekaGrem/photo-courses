'use client';
import { usePortal } from '@/context/PortalContext';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { name: 'Швидкий старт', href: '#faststart', id: 'faststart' },
  { name: 'PRO Світло', href: '#prosvitlo', id: 'prosvitlo' },
  // { name: 'Індивідуальна школа', href: '#school', id: 'school' },
];

const BottomTabs = () => {
  const searchParams = useSearchParams();
  const { variantId, setVariantId } = usePortal();

  useEffect(() => {
    const variant = searchParams.get('variant');
    if (variant) {
      setVariantId?.(variant);
    }
  }, [searchParams, setVariantId]);

  const handleVariantChange = (newVariantId: string) => {
    setVariantId?.(newVariantId);
    const element = document.getElementById(newVariantId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.history.pushState(null, '', `#${newVariantId}`);
  };
  return (
    <>
      {/* prettier-ignore */}
      <div className="sticky bottom-4 left-10 lg:left-1/2 sm:left-1/3  z-10 w-full max-w-xs px-3 lg:-translate-x-1/2  ">
      <nav className="rounded-full bg-background_btn_burger animate-tilt-shaking ">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between p-2">
          <ul className="flex w-full justify-between">
            {tabs.map((tab, id) => (
              <motion.li 
              key={tab.id} 
              className="font-bold text-white hover:shadow-xl relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {/* Animated background for active tab */}
              {variantId === tab.id && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-2xl bg-background_btn text-text_1"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
                 <button 
                  onClick={() => handleVariantChange(tab.id)}
                  className="relative z-10 block rounded-2xl p-1 text-center text-xs font-medium shadow-lg transition duration-300 ease-in-out md:p-2"
                >
                  <motion.span 
                    className={`font-semibold md:text-base transition-colors duration-300 ${
                      variantId === tab.id
                        ? 'text-background_btn_burger'
                        : 'text-white hover:text-black'
                    }`}
                    animate={{
                      color: variantId === tab.id ? 'var(--background-btn-burger)' : 'white'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tab.name}
                  </motion.span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
};

export default BottomTabs;
