import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export interface LocalImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  filename: string;
}
export interface ColumnImages {
  one: LocalImage[];
  two: LocalImage[];
  three: LocalImage[];
}
export enum LocalImageFolders {
  STUDENT_GALLERY = '/assets/gallery/students',
  AUTHOR_GALLERY = '/assets/gallery/author',
  PORTFOLIO = '/assets/portfolio',
  TESTIMONIALS = '/assets/testimonials',
}
async function getImages(folder: string): Promise<LocalImage[]> {
  const fullPath = path.join(process.cwd(), 'public', folder);
  const files = (await fs.readdir(fullPath))
    .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, 'uk', { numeric: true }));
  return Promise.all(
    files.map(async (filename, index) => {
      const metadata = await sharp(path.join(fullPath, filename)).metadata();
      if (!metadata.width || !metadata.height) throw new Error(`Cannot read image dimensions: ${filename}`);
      return {
        src: `${folder}/${filename}`,
        filename,
        width: metadata.width,
        height: metadata.height,
        alt: `${folder.includes('/students') ? 'Робота з галереї учнів Screen Photo School' : 'Авторська фотографія Олега Сернюка'}, ${['one', 'two', 'three'].indexOf(folder.split('-').pop() || '') + 1}-${index + 1}`,
      };
    })
  );
}
export async function getColumnImages(folder: LocalImageFolders): Promise<ColumnImages> {
  const [one, two, three] = await Promise.all(
    ['one', 'two', 'three'].map((column) => getImages(`${folder}/column-${column}`))
  );
  return { one, two, three };
}
