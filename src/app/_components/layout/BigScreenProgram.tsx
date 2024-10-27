'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import CarouselProgram from '@/app/_components/layout/CarouselProgram';
import { motion, AnimatePresence } from 'framer-motion';

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
    title2: string;
    list: Array<string>;
    img?: string;
    img_alt?: string;
    video?: string;
    сarousel?: Array<CarouselType>;
  };
};
type ComponentProps = {
  data: InfoType[];
};

const BigScreenProgram: React.FC<ComponentProps> = ({ data }) => {
  const [selectedId, setSelectedId] = useState(data[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = (id: number) => {
    const exists = data.some((item) => item.id === id);

    if (exists) {
      setSelectedId(id);
    } else {
      setSelectedId(data[0].id);
    }
    setIsPlaying(false);
  };

  const handlePlayClick = async () => {
    try {
      setIsPlaying(true);
      if (videoRef.current) {
        await videoRef.current.play();
      }
    } catch (error) {
      // Handle any playback errors
      setIsPlaying(false);
      console.error('Error playing video:', error);
      // Optionally show user feedback
      // alert('Failed to play video');
    }
  };
  return (
    <div className="relative flex flex-row items-start">
      <ol className="w-1/3 p-4">
        {data.map((item, index) => (
          <li
            key={item.id}
            className={`mb-5 cursor-pointer break-words p-2 text-xl font-bold normal-case ${
              selectedId === item.id
                ? 'border-text-text_2 border-b-4 border-solid'
                : 'border-text-text_2 border-b-2 border-solid'
            }`}
            onClick={() => handleClick(item.id)}>
            {index + 1}. {item.title}
          </li>
        ))}
      </ol>
      <div className="sticky top-4 w-full px-24">
        <div className="left-0 top-0 h-full w-full pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}>
              {data.map((item) =>
                item.id === selectedId ? (
                  <div key={item.id}>
                    <div className="pb-5">
                      <div>
                        <div className="pb-3 text-xl font-bold lg:text-2xl">{item.content.title}</div>
                        <ul className=" ">
                          {item.content.list.map((item, index) => (
                            <li className="list-inside list-disc pb-2 text-lg lg:text-xl" key={index}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="relative min-h-96">
                      {item.content.сarousel ? (
                        <CarouselProgram carousel={item.content.сarousel} />
                      ) : item.content.video ? (
                        <>
                          {!isPlaying && (
                            <>
                              <Image
                                className="h-full w-full rounded-lg object-cover shadow-2xl"
                                src={item.content.img || 'Content image'}
                                alt={item.content.img_alt || 'Content image'}
                                width={640}
                                height={360}
                                priority={true}
                              />
                              <button
                                className="absolute inset-0 flex items-center justify-center text-black"
                                onClick={handlePlayClick}>
                                <div className="flex items-center justify-center rounded-full bg-white bg-opacity-70 p-3 shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                                  <Image
                                    className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16"
                                    src="assets/svg/play2.svg"
                                    alt="play video"
                                    width={640}
                                    height={360}
                                    priority={true}
                                  />
                                </div>
                              </button>
                            </>
                          )}
                          <video
                            ref={videoRef}
                            className={`h-full w-full rounded-lg object-cover shadow-2xl ${isPlaying ? 'block' : 'hidden'}`}
                            controls={isPlaying}>
                            <source src={item.content.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </>
                      ) : item.content.img ? (
                        <Image
                          className="h-full w-full rounded-lg object-cover shadow-2xl"
                          src={item.content.img}
                          alt={item.content.img_alt || 'Content image'}
                          width={640}
                          height={360}
                          priority={true}
                        />
                      ) : null}
                    </div>
                  </div>
                ) : null
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BigScreenProgram;
