'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import CarouselProgram from '@/app/_components/layout/CarouselProgram';

interface CarouselItem {
  id: number;
  src: string;
  alt: string;
}

interface ContentDetails {
  title: string;
  title2?: string;
  list: string[];
  img?: string;
  img_alt?: string;
  video?: string;
  carousel?: CarouselItem[];
}

interface ProgramItem {
  id: number;
  title: string;
  content: ContentDetails;
}

interface ComponentProps {
  data: ProgramItem[];
}

// Separate out animation configurations
const animationVariants = {
  button: {
    initial: false,
    transition: { duration: 0.2 },
  },
  content: {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.3 },
  },
  media: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 },
  },
};

const ListItem: React.FC<{
  item: ProgramItem;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}> = React.memo(({ item, index, isOpen, onClick }) => {
  return (
    <li className="overflow-hidden bg-white shadow-md">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`content-${item.id}`}>
        <span className="text-base font-semibold text-gray-800">
          {index + 1}. {item.title}
        </span>
        <motion.div
          {...animationVariants.button}
          animate={{ rotate: isOpen ? 135 : 0 }}
          className="flex h-4 min-w-10 items-center justify-center">
          <Image
            className="h-full w-full rounded-lg object-cover shadow-2xl"
            src="/assets/svg/plus.svg"
            alt="Expand/Collapse"
            width={35}
            height={40}
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhICAABXRUJQVlA4WAoAAAAgAAAAAQAAAQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAAAAJABAJ0BKgIAAgADgFolpAAC51m2AAD+5vktfOMAEl7C5OgAAA=="
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div id={`content-${item.id}`} {...animationVariants.content}>
            <div className="px-6 pb-6 text-gray-700">
              <ExpandedContent content={item.content} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const ExpandedContent: React.FC<{ content: ContentDetails }> = React.memo(({ content }) => {
  const renderMedia = () => {
    if (content.carousel) {
      return <CarouselProgram carousel={content.carousel} />;
    }

    if (content.video) {
      return (
        <video className="h-full w-full rounded-lg object-cover shadow-2xl" controls poster={content.img}>
          <source src={content.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (content.img) {
      return (
        <Image
          className="h-full rounded-lg object-cover shadow-2xl"
          src={content.img}
          alt={content.img_alt || 'Content image'}
          width={640}
          height={360}
          priority
        />
      );
    }

    return null;
  };

  return (
    <div className="left-0 top-0 h-full w-full">
      <motion.div className="flex flex-col pb-3 sm:flex-row sm:px-3">
        <div className="w-full p-3">
          {/* <div className="text-1xl pb-4 font-semibold">{content.title}</div> */}
          <ul>
            {content.list.map((item, index) => (
              <li className="list-inside list-disc" key={`list-item-${index}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div className="relative" {...animationVariants.media}>
          {renderMedia()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

ExpandedContent.displayName = 'ExpandedContent';
const PhoneScreenProgram: React.FC<ComponentProps> = React.memo(({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleButtonClick = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className="section container">
      <div className="flex flex-col content-center gap-12 lg:flex-row">
        <div className="w-full">
          <motion.ol
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="list-decimal space-y-4">
            {data.map((item, index) => (
              <ListItem
                key={`program-item-${item.id}`}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
});

PhoneScreenProgram.displayName = 'PhoneScreenProgram';

export default PhoneScreenProgram;
