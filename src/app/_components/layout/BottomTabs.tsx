'use client';
import Link from 'next/link';
import { usePortal } from '@/context/PortalContext';

const tabs = [
  { name: 'ШВИДКИЙ СТАРТ', href: '#program', id: 'basic' },
  { name: 'Індивідуальна школа фотографії', href: '#program', id: 'advanced' },
];

const BottomTabs = () => {
  const { variantId, setVariantId } = usePortal();

  const handleVariantChange = (newVariantId: string) => {
    setVariantId?.(newVariantId);
  };
  return (
    <div className="sticky bottom-4 left-1/2 z-10 w-full max-w-lg px-3 sm:-translate-x-1/2">
      <nav className="rounded-full bg-gray-700">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between p-2">
          <ul className="flex w-full justify-between">
            {tabs.map((tab, id) => (
              <li key={id}>
                <button onClick={() => handleVariantChange(`${tab.id}`)}>
                  <Link
                    href={tab.href}
                    className="block rounded px-1 py-1 text-center text-xs font-medium text-white hover:text-background_btn_hover md:px-2 md:py-2">
                    <span>{tab.name}</span>
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