'use client';
import type { ImageLoaderProps } from 'next/image';
/** Build-time variants keep the legacy Next runtime image endpoint disabled. */
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (src === '/hero.jpg' || (src.startsWith('/assets/') && /\.(png|jpe?g|webp)$/i.test(src))) {
    return encodeURI(`/_media/${width}${src}.webp`);
  }
  return src;
}
