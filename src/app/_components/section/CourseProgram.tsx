'use client';
import { Suspense, lazy, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePortal } from '@/context/PortalContext';
import { motion, AnimatePresence } from 'framer-motion';

const BigScreenProgram = lazy(() => import('../layout/BigScreenProgram'));
const PhoneScreenProgram = lazy(() => import('../layout/PhoneScreenProgram'));
import Loading from '@/app/loading';

import { data_section_2 } from '@/db/data';

type ProgramContentType = {
  title: string;
  title2: string;
  list: Array<string>;
  img?: string;
  img_alt?: string;
  video?: string;
};

type ProgramItemType = {
  id: number;
  title: string;
  content: ProgramContentType;
};

type VariantType = {
  id: string;
  title_2: string;
  program: Array<ProgramItemType>;
};

type DataSection2Type = {
  variants: Array<VariantType>;
};

const data: DataSection2Type = data_section_2;
const CourseProgram = () => {
  const searchParams = useSearchParams();
  const { variantId, setVariantId } = usePortal();

  useEffect(() => {
    const variant = searchParams.get('variant');
    if (variant && data.variants.some((v) => v.id === variant)) {
      setVariantId?.(variant);
    }
  }, [searchParams, setVariantId]);
  const selectedVariant = data.variants.find((variant) => variant.id === variantId);

  if (!selectedVariant) {
    return <div>Variant not found</div>;
  }
  return (
    <section id={variantId} className="bg-background_header">
      <div className="section container text-text_2" id="program">
        <AnimatePresence mode="wait">
          <motion.h2
            key={selectedVariant.title_2}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="transform text-center text-2xl sm:text-left sm:text-5xl">
            {selectedVariant.title_2}
          </motion.h2>
        </AnimatePresence>
        <Suspense fallback={<Loading />}>
          <div className="big-screen">
            <BigScreenProgram data={selectedVariant.program} />
          </div>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <div className="phone-screen">
            <PhoneScreenProgram data={selectedVariant.program} />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default CourseProgram;
