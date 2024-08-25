'use client';
import { Button } from '../common/Button';
import { usePortal } from '@/app/_components/layout/PortalContext';
import CheckmarkIcon from '../common/Checkmark';
import { motion } from 'framer-motion';
import { section_6 } from '@/db/data';
import Link from 'next/link';

const tabs = [
  { name: 'ШВИДКИЙ СТАРТ', href: '' },
  { name: 'Індивідуальна школа фотографії', href: '' },
  { name: 'Індивідуальна школа фотографії', href: '' },
];
type PriseType = {
  title: string;
  price: string;
  newPrice: string;
  discount: number;
  description: string;
  features: string[];
};

const data: PriseType[] = section_6;
const Price2 = () => {
  const { setIsPortalOpen, setTitle } = usePortal();

  const openPortal = (title: string) => {
    setTitle?.(title);
    setIsPortalOpen(true);
  };
  return (
    <section className="bg-[#e4722b]">
      <div className="section container mx-auto">
        <h2 className="mb-12 text-center text-text_2">ВАРТІСТЬ НАВЧАННЯ</h2>

        <div id="price" className="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3">
          {data.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {plan.discount && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-red-500 px-4 py-1 font-bold text-white">
                  Знижка {plan.discount}%
                </div>
              )}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-text_1">{plan.title}</h3>
                <div className="mb-4 flex flex-col">
                  {plan.newPrice ? (
                    <>
                      <h4 className="ml-2 text-2xl font-bold text-gray-400 line-through">{plan.price}</h4>
                      <h4 className="text-4xl font-bold">{plan.newPrice}</h4>
                    </>
                  ) : (
                    <h4 className="text-4xl font-bold">{plan.price}</h4>
                  )}
                </div>
                <p className="mb-6 text-[#4a4a4a] xl:min-h-40">{plan.description}</p>
                <div className="text-center">
                  <Button
                    text="Замовити"
                    onClick={() => openPortal(plan.title)}
                    className="w-full max-w-60 rounded-lg bg-[#e4722b] px-4 py-3 font-bold text-text_2 drop-shadow-xl transition-colors text-shadow-black2 hover:bg-opacity-90"
                  />
                </div>
              </div>
              <div className="bg-[#fff5f0] p-8">
                <h3 className="mb-4 font-semibold text-text_1">Що входить:</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckmarkIcon className="text-background_section_6" />
                      <span className="ml-2 text-[#4a4a4a]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <BottomTabs />
      </div>
    </section>
  );
};

function BottomTabs() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700">
      <nav className="mx-auto my-2 grid grid-cols-3 gap-1 rounded-lg p-1">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`rounded-lg px-5 py-1.5 text-center text-xs font-medium text-white`}>
            <span className="mt-1 text-xs">{tab.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Price2;
