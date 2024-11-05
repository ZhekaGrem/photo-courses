'use client';
import { useEffect, useRef } from 'react';
import { usePortal } from '@/context/PortalContext';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const BigScreenProgram = dynamic(() => import('../layout/BigScreenProgram'), { loading: () => <Loading /> });
const PhoneScreenProgram = dynamic(() => import('../layout/PhoneScreenProgram'), {
  loading: () => <Loading />,
});
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
  const { variantId, setVariantId } = usePortal();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const variant = data.variants.find((v) => v.id === hash);
      if (variant) {
        setVariantId?.(variant.id);
        setTimeout(scrollToSection, 100); // Невелика затримка для надійності
      }
    };

    handleHashChange(); // Викликаємо функцію при першому завантаженні
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setVariantId]);
  const selectedVariant = data.variants.find((variant) => variant.id === variantId);

  if (!selectedVariant) {
    return <div>Variant not found</div>;
  }
  return (
    <section id={variantId} ref={sectionRef} className="bg-background_header">
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
        <div className="big-screen">
          <BigScreenProgram data={selectedVariant.program} />
        </div>
        <div className="phone-screen">
          <PhoneScreenProgram data={selectedVariant.program} />
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
