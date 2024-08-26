'use client';
import Link from 'next/link';
import { usePortal } from '@/context/PortalContext';
import { useState } from 'react';

const tabs = [
  { name: 'Швидкий старт', href: '#program', id: 'basic' },
  { name: 'Індивідуальна школа', href: '#program', id: 'advanced' },
  { name: 'PRO Світло', href: '#program', id: 'light' },
];

const BottomTabs = () => {
  const { variantId, setVariantId } = usePortal();
  const [activeTab, setActiveTab] = useState('basic');

  const handleVariantChange = (newVariantId: string) => {
    setActiveTab(newVariantId);
    setVariantId?.(newVariantId);
  };
  return (
    <div className="sticky bottom-4 left-1/2 z-10 w-full max-w-lg px-3 sm:-translate-x-1/2">
      <nav className="rounded-full bg-gray-700">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between p-2">
          <ul className="flex w-full justify-between">
            {tabs.map((tab, id) => (
              <li key={id} className="font-bold text-white">
                <button onClick={() => handleVariantChange(tab.id)}>
                  <Link
                    href={tab.href}
                    className={`block rounded-2xl p-1 text-center text-xs font-medium shadow-md transition duration-300 ease-in-out md:p-2 ${
                      activeTab === tab.id
                        ? 'cursor-pointer rounded-full bg-gray-500'
                        : 'transition hover:bg-gray-300 hover:text-black active:scale-95'
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
  );
};

export default BottomTabs;
