'use client';
import { data_section_2 } from '@/db/data';
import React, { useEffect, useRef, Suspense } from 'react';
import { usePortal } from '@/context/PortalContext';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const BigScreenProgram = dynamic(() => import('../layout/BigScreenProgram'), {
  loading: () => <SkeletonLoader variant="big" />,
  ssr: false,
});

const PhoneScreenProgram = dynamic(() => import('../layout/PhoneScreenProgram'), {
  loading: () => <SkeletonLoader variant="phone" />,
  ssr: false,
});

// Create a more informative loading component
const SkeletonLoader = ({ variant }: { variant: 'big' | 'phone' }) => (
  <div className={`skeleton-loader ${variant}`}>
    <div className="animate-pulse">
      <div className="mb-4 h-4 bg-gray-300"></div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="mb-2 h-20 rounded bg-gray-200"></div>
      ))}
    </div>
  </div>
);

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

const CourseProgram = React.memo(() => {
  const { variantId, setVariantId } = usePortal();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = React.useCallback(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const variant = data.variants.find((v) => v.id === hash);

      if (variant) {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
          setVariantId?.(variant.id);
          scrollToSection;
        });
      }
    };

    // Initial load and hash change handling
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setVariantId, scrollToSection]);

  const selectedVariant =
    data.variants.find((variant) => variant.id === variantId) ||
    data.variants.find((variant) => variant.id === 'faststart');

  if (!selectedVariant) {
    return (
      <div className="p-4 text-center text-gray-500">
        No variant selected. Please choose a program variant.
      </div>
    );
  }

  return (
    <section
      id={variantId}
      ref={sectionRef}
      className="bg-background_section_2_2"
      aria-labelledby="course-program-title">
      <div className="section container text-text_2_2" id="program">
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
    </section>
  );
});

CourseProgram.displayName = 'CourseProgram';

export default CourseProgram;

// CSS can remain the same as in your original file
