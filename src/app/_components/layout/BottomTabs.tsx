'use client';
import Link from 'next/link';
import { usePortal } from '@/context/PortalContext';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const tabs = [
  { name: 'Швидкий старт', href: '#faststart', id: 'faststart' },
  { name: 'PRO Світло', href: '#prosvitlo', id: 'prosvitlo' },
  { name: 'Індивідуальна школа', href: '#school', id: 'school' },
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
    window.location.hash = newVariantId;
  };
  return (
    <>
      {/* prettier-ignore */}
      <div className="sticky bottom-4 left-1/2  z-10 w-full max-w-lg px-3 lg:-translate-x-1/2  ">
      <nav className="rounded-full bg-background_btn_burger animate-tilt-shaking ">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between p-2">
          <ul className="flex w-full justify-between">
            {tabs.map((tab, id) => (
              <li key={id} className="font-bold text-white">
                <button onClick={() => handleVariantChange(tab.id)}>
                  <Link
                    href={tab.href}
                    className={`block rounded-2xl p-1 text-center text-xs font-medium shadow-md transition duration-300 ease-in-out md:p-2 ${
                      variantId  === tab.id
                        ? 'cursor-pointer rounded-full bg-text_2 text-background_btn_burger'
                        : 'transition hover:bg-background_btn hover:text-black active:scale-95'
                    }`}>
                    <span className="font-semibold md:text-base">{tab.name}</span>
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
};

export default BottomTabs;
