'use client';
import { Button } from '../common/Button';
import { usePortal } from '@/context/PortalContext';
import CheckmarkIcon from '../common/Checkmark';
import { motion } from 'framer-motion';
import { section_6 } from '@/db/data';

type PriseType = {
  title: string;
  price?: string;
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

  const selectedVariant =
    data.variants.find((variant) => variant.id === variantId) ||
    data.variants.find((variant) => variant.id === 'faststart');
  const colSection = selectedVariant?.price.length;
  if (!selectedVariant) {
    return <div>Variant not found</div>;
  }
  const openPortal = (title: string) => {
    setTitle?.(title);
    setIsPortalOpen(true);
  };
  return (
    <section className="bg-cloud_dancer">
      <div className="section container mx-auto">
        <h2 className="py-6 text-center text-pageant_blue">ВАРТІСТЬ НАВЧАННЯ</h2>

        <div
          id="price"
          className={`grid grid-cols-1 gap-4 pb-6 xl:grid-cols-4 ${colSection === 1 ? 'justify-center xl:grid-cols-1' : ''}`}>
          {selectedVariant.price.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mx-auto max-w-[361px] overflow-hidden bg-white shadow-2xl">
              {plan.content.discount && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-background_btn_burger px-4 py-1 font-bold text-white">
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
                    className="w-full max-w-60 rounded-lg bg-pageant_blue px-4 py-3 font-bold text-cloud_dancer drop-shadow-xl transition-colors hover:bg-opacity-90">
                    Замовити
                  </Button>
                </div>
              </div>
              <div className="bg-[#fff5f0] p-8">
                <h3 className="mb-4 font-semibold text-text_1">Що входить:</h3>
                <ul className="space-y-2">
                  {plan.content.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckmarkIcon className="text-harbor_blu" />
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
