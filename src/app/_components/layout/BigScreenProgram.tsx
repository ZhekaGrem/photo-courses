'use client';
import React, { useState, useRef, useMemo, useCallback, Suspense, lazy } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Optimize dynamic import with lazy loading and error boundary
const CarouselProgram = lazy(() =>
  import('@/app/_components/layout/CarouselProgram').catch(() => ({
    default: () => <div>Failed to load carousel</div>,
  }))
);

// Performance-optimized skeleton loader
const SkeletonLoader = React.memo(() => (
  <div className="animate-pulse space-y-4">
    <div className="h-64 rounded bg-gray-300"></div>
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-4 rounded bg-gray-200"></div>
      ))}
    </div>
  </div>
));

// Types definition
type CarouselType = {
  id: number;
  src: string;
  alt: string;
};

type InfoType = {
  id: number;
  title: string;
  content: {
    title: string;
    list: string[];
    img?: string;
    img_alt?: string;
    video?: string;
    сarousel?: CarouselType[];
  };
};

type ComponentProps = {
  data: InfoType[];
};

// Memoized animation configuration
const animationContent = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3 },
};

// Optimized media rendering component
const MediaRenderer = React.memo(
  ({
    content,
    isPlaying,
    videoRef,
    onPlayClick,
  }: {
    content: InfoType['content'];
    isPlaying: boolean;
    videoRef: React.RefObject<HTMLVideoElement>;
    onPlayClick: () => void;
  }) => {
    if (content.сarousel) {
      return (
        <Suspense fallback={<SkeletonLoader />}>
          <CarouselProgram carousel={content.сarousel} />
        </Suspense>
      );
    }

    if (content.video) {
      return (
        <div className="relative min-h-96">
          {!isPlaying && (
            <>
              <Image
                className="h-full w-full rounded-lg object-cover shadow-2xl"
                src={content.img || '/placeholder.jpg'}
                alt={content.img_alt || 'Content preview'}
                width={640}
                height={360}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRhICAABXRUJQVlA4WAoAAAAgAAAAAQAAAQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAAAAJABAJ0BKgIAAgADgFolpAAC51m2AAD+5vktfOMAEl7C5OgAAA=="
              />
              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={onPlayClick}
                aria-label="Play Video">
                <div className="rounded-full bg-white/70 p-3 shadow-lg">
                  <Image src="assets/svg/play2.svg" alt="Play" width={48} height={48} priority />
                </div>
              </button>
            </>
          )}
          <video
            ref={videoRef}
            className={`h-full w-full rounded-lg object-cover shadow-2xl ${isPlaying ? 'block' : 'hidden'}`}
            controls={isPlaying}
            preload="metadata">
            <source src={content.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    if (content.img) {
      return (
        <Image
          className="h-full w-full rounded-lg object-cover shadow-2xl"
          src={content.img}
          alt={content.img_alt || 'Content image'}
          width={640}
          height={360}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhICAABXRUJQVlA4WAoAAAAgAAAAAQAAAQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAAAAJABAJ0BKgIAAgADgFolpAAC51m2AAD+5vktfOMAEl7C5OgAAA=="
        />
      );
    }

    return null;
  }
);

// Main component with performance optimizations
const BigScreenProgram: React.FC<ComponentProps> = React.memo(({ data }) => {
  const [selectedId, setSelectedId] = useState(data[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Memoized and optimized click handler
  const handleClick = useCallback(
    (id: number) => {
      const exists = data.some((item) => item.id === id);
      setSelectedId(exists ? id : data[0].id);
      setIsPlaying(false);
    },
    [data]
  );

  // Play video handler with error handling
  const handlePlayClick = useCallback(() => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video play failed:', error);
        setIsPlaying(false);
      });
    }
  }, []);

  // Memoized current item selection
  const currentItem = useMemo(
    () => data.find((item) => item.id === selectedId) || data[0],
    [data, selectedId]
  );

  return (
    <div className="relative flex flex-row items-start">
      <nav className="w-1/3 p-4">
        <ol>
          {data.map((item, index) => (
            <li
              key={item.id}
              className={`mb-5 cursor-pointer break-words p-2 text-xl font-bold normal-case ${
                selectedId === item.id
                  ? 'border-text-text_2 border-b-4 border-solid'
                  : 'border-text-text_2 border-b-2 border-solid'
              }`}
              onClick={() => handleClick(item.id)}
              role="button"
              tabIndex={0}>
              {index + 1}. {item.title}
            </li>
          ))}
        </ol>
      </nav>

      <div className="sticky top-4 w-full px-24">
        <div className="left-0 top-0 h-full w-full pt-4">
          <AnimatePresence mode="wait">
            <motion.div key={selectedId} {...animationContent}>
              {currentItem && (
                <div key={currentItem.id}>
                  <div className="pb-5">
                    <h3 className="pb-3 text-xl font-bold lg:text-2xl">{currentItem.content.title}</h3>
                    <ul>
                      {currentItem.content.list.map((item, index) => (
                        <li key={index} className="list-inside list-disc pb-2 text-lg lg:text-xl">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Suspense fallback={<SkeletonLoader />}>
                    <MediaRenderer
                      content={currentItem.content}
                      isPlaying={isPlaying}
                      videoRef={videoRef}
                      onPlayClick={handlePlayClick}
                    />
                  </Suspense>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

BigScreenProgram.displayName = 'BigScreenProgram';

export default BigScreenProgram;
