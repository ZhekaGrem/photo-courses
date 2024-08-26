'use client';
import { Button } from '../common/Button';
import { usePortal } from '@/context/PortalContext';
import CheckmarkIcon from '../common/Checkmark';
import { motion } from 'framer-motion';
import { section_6 } from '@/db/data';

type PriseType = {
  title: string;
  price: string;
  newPrice?: string;
  discount?: number;
  description: string;
  features: string[];
};
type PriceItemType = {
  id: number;
  content: PriseType;
};
type VariantType = {
  id: string;
  price: Array<PriceItemType>;
};

type DataSection6Type = {
  variants: Array<VariantType>;
};

const data: DataSection6Type = section_6;

const Price2 = () => {
  const { setIsPortalOpen, setTitle, variantId } = usePortal();

  const selectedVariant = data.variants.find((variant) => variant.id === variantId);

  if (!selectedVariant) {
    return <div>Variant not found</div>;
  }
  const openPortal = (title: string) => {
    setTitle?.(title);
    setIsPortalOpen(true);
  };
  return (
    <section className="bg-[#e4722b]">
      <div className="section container mx-auto">
        <h2 className="mb-12 text-center text-text_2">ВАРТІСТЬ НАВЧАННЯ</h2>

        <div id="price" className="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3">
          {selectedVariant.price.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {plan.content.discount && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-red-500 px-4 py-1 font-bold text-white">
                  Знижка {plan.content.discount}%
                </div>
              )}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-text_1">{plan.content.title}</h3>
                <div className="mb-4 flex flex-col">
                  {plan.content.newPrice ? (
                    <>
                      <h4 className="ml-2 text-2xl font-bold text-gray-400 line-through">
                        {plan.content.price}
                      </h4>
                      <h4 className="text-4xl font-bold">{plan.content.newPrice}</h4>
                    </>
                  ) : (
                    <h4 className="text-4xl font-bold">{plan.content.price}</h4>
                  )}
                </div>
                <p className="mb-6 text-[#4a4a4a] xl:min-h-40">{plan.content.description}</p>
                <div className="text-center">
                  <Button
                    text="Замовити"
                    onClick={() => openPortal(plan.content.title)}
                    className="w-full max-w-60 rounded-lg bg-[#e4722b] px-4 py-3 font-bold text-text_2 drop-shadow-xl transition-colors text-shadow-black2 hover:bg-opacity-90"
                  />
                </div>
              </div>
              <div className="bg-[#fff5f0] p-8">
                <h3 className="mb-4 font-semibold text-text_1">Що входить:</h3>
                <ul className="space-y-2">
                  {plan.content.features.map((feature, index) => (
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
      </div>
    </section>
  );
};

export default Price2;
