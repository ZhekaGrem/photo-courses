'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { LocalImage, ColumnImages } from '@/lib/local-images';

function ImageDialog({ image, onClose }: { image: LocalImage; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    const element = dialog.current;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="gallery-dialog"
      aria-label={image.alt}
      aria-modal="true"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}>
      <button className="dialog-close" aria-label="Закрити фотографію" onClick={onClose}>
        ×
      </button>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="90vw" />
    </dialog>
  );
}
export default function LocalGallery({ columnImages }: { columnImages: ColumnImages }) {
  const [selected, setSelected] = useState<LocalImage | null>(null);
  return (
    <>
      <div className="gallery-grid">
        {Object.entries(columnImages).map(([column, images]) => (
          <div key={column} className="gallery-column">
            {images.map((image: LocalImage) => (
              <button
                className="gallery-button"
                key={image.src}
                onClick={() => setSelected(image)}
                aria-label={`Відкрити: ${image.alt}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes="(max-width: 767px) 90vw, 30vw"
                />
              </button>
            ))}
          </div>
        ))}
      </div>
      {selected && <ImageDialog image={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
