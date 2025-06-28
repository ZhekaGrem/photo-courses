// src/lib/local-images.ts
import fs from 'fs';
import path from 'path';

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

export enum ColumnNames {
  ONE = 'column-one',
  TWO = 'column-two',
  THREE = 'column-three',
}

// Отримання розмірів зображення (опціонально, для оптимізації)
function getImageDimensions(imagePath: string): { width: number; height: number } {
  // Для простоти використовуємо стандартні розміри
  // Можна додати реальне читання розмірів через sharp або image-size
  return { width: 400, height: 600 };
}

// Читання зображень з локальної папки
function getImagesFromLocalFolder(folderPath: string): LocalImage[] {
  try {
    const fullPath = path.join(process.cwd(), 'public', folderPath);

    // Перевіряємо чи існує папка
    if (!fs.existsSync(fullPath)) {
      console.warn(`Folder does not exist: ${fullPath}`);
      return [];
    }

    const files = fs.readdirSync(fullPath);

    // Фільтруємо тільки зображення
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const imageFiles = files.filter((file) =>
      imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
    );

    return imageFiles
      .map((filename) => {
        const { width, height } = getImageDimensions(path.join(fullPath, filename));

        return {
          src: `${folderPath}/${filename}`,
          alt: `Gallery image ${filename}`,
          width,
          height,
          filename,
        };
      })
      .sort((a, b) => {
        // Сортування за номером у назві файлу
        const numA = extractNumber(a.filename);
        const numB = extractNumber(b.filename);
        return numA - numB;
      });
  } catch (error) {
    console.error(`Error reading folder ${folderPath}:`, error);
    return [];
  }
}

// Витягування номера з назви файлу
function extractNumber(filename: string): number {
  const match = filename.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

// Отримання зображень для колонок
export function getColumnImages(baseFolder: LocalImageFolders): ColumnImages {
  const columnOne = getImagesFromLocalFolder(`${baseFolder}/${ColumnNames.ONE}`);
  const columnTwo = getImagesFromLocalFolder(`${baseFolder}/${ColumnNames.TWO}`);
  const columnThree = getImagesFromLocalFolder(`${baseFolder}/${ColumnNames.THREE}`);

  return {
    one: columnOne,
    two: columnTwo,
    three: columnThree,
  };
}

// Отримання всіх зображень з папки (для портфоліо)
export function getAllImagesFromFolder(folder: LocalImageFolders): LocalImage[] {
  return getImagesFromLocalFolder(folder);
}

// Генерація статичних даних для build часу
export function generateImageManifest() {
  const manifest = {
    students: getColumnImages(LocalImageFolders.STUDENT_GALLERY),
    author: getColumnImages(LocalImageFolders.AUTHOR_GALLERY),
    portfolio: getAllImagesFromFolder(LocalImageFolders.PORTFOLIO),
    testimonials: getAllImagesFromFolder(LocalImageFolders.TESTIMONIALS),
    generated: new Date().toISOString(),
  };

  // Зберігаємо маніфест для швидкого доступу
  const manifestPath = path.join(process.cwd(), 'public', 'image-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log('Image manifest generated successfully');
  return manifest;
}

// Читання маніфесту (для клієнтської сторони)
export async function getImageManifest() {
  try {
    const response = await fetch('/image-manifest.json');
    return await response.json();
  } catch (error) {
    console.error('Failed to load image manifest:', error);
    return null;
  }
}
