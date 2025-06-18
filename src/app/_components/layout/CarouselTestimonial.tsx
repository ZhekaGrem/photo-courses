'use client';
import React, { useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const CarouselTestimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const images = [
    {
      id: 1,
      url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1750234041/screenphotoschool/feedback/2025-06-18_10.57.23_owo6ci.jpg',
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1750234039/screenphotoschool/feedback/2025-06-18_10.57.08_lexav4.jpg',
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1750234036/screenphotoschool/feedback/2025-06-18_10.57.05_m0yga9.jpg',
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1750234034/screenphotoschool/feedback/2025-06-18_10.56.59_dpuld0.jpg',
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1750234032/screenphotoschool/feedback/2025-06-18_10.56.56_yshj9x.jpg',
    },
    {
      id: 6,
      url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1750234030/screenphotoschool/feedback/2025-06-18_10.56.52_esqa28.jpg',
    },
    {
      id: 7,
      url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1750234028/screenphotoschool/feedback/2025-06-18_10.56.47_n3id8r.jpg',
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      mode: 'free-snap',
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            origin: 'center',
            perView: 2,
            spacing: 20,
          },
        },
        '(min-width: 1024px)': {
          slides: {
            origin: 'center',
            perView: 3,
            spacing: 24,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2500); // Швидкість автоплею - 2.5 секунди
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text_header lg:text-4xl">Відгуки наших студентів</h2>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {images.map((image, idx) => (
              <div key={image.id} className="keen-slider__slide">
                <div className="group relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.url}
                      alt={`Відгук студента ${idx + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselTestimonial;
