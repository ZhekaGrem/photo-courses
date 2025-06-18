import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface CloudinaryImage {
  public_id: string;
  width: number;
  height: number;
  folder: string;
}

export interface ColumnImages {
  one: CloudinaryImage[];
  two: CloudinaryImage[];
  three: CloudinaryImage[];
}

// Enums for folder paths
export enum CloudinaryFolders {
  AUTHOR = 'screenphotoschool/author',
  STUDENT_COLUMNS = 'screenphotoschool/students_photo/columns',
}

export enum ColumnNames {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
}

// Get images from specific path and subfolder
async function getImagesFromColumn(
  basePath: CloudinaryFolders,
  columnName: ColumnNames
): Promise<CloudinaryImage[]> {
  try {
    const folderPath = `${basePath}/${columnName}`;
    const result = await cloudinary.search
      .expression(`folder:${folderPath}`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    return result.resources.map((resource: any) => ({
      public_id: resource.public_id,
      width: resource.width || 400,
      height: resource.height || 600,
      folder: resource.folder || 'unknown',
    }));
  } catch (error) {
    console.error(`Failed to load images from ${basePath}/${columnName}:`, error);
    return [];
  }
}

// Get all column images organized by folder with configurable base path
export async function getColumnImages(
  basePath: CloudinaryFolders = CloudinaryFolders.STUDENT_COLUMNS
): Promise<ColumnImages> {
  try {
    const [oneImages, twoImages, threeImages] = await Promise.all([
      getImagesFromColumn(basePath, ColumnNames.ONE),
      getImagesFromColumn(basePath, ColumnNames.TWO),
      getImagesFromColumn(basePath, ColumnNames.THREE),
    ]);

    return {
      one: oneImages,
      two: twoImages,
      three: threeImages,
    };
  } catch (error) {
    console.error('Failed to load column images:', error);
    return {
      one: [],
      two: [],
      three: [],
    };
  }
}

// Updated legacy function using enum
export async function getImagesFromFoldersFeedback(): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${CloudinaryFolders.STUDENT_COLUMNS}/*`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    return result.resources.map((resource: any) => ({
      public_id: resource.public_id,
      width: resource.width || 400,
      height: resource.height || 600,
      folder: resource.folder || 'unknown',
    }));
  } catch (error) {
    console.error('Failed to load images:', error);
    return [];
  }
}

export async function getImagesFromFoldersAuthor(): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${CloudinaryFolders.AUTHOR}/*`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    return result.resources.map((resource: any) => ({
      public_id: resource.public_id,
      width: resource.width || 400,
      height: resource.height || 600,
      folder: resource.folder || 'unknown',
    }));
  } catch (error) {
    console.error('Failed to load images:', error);
    return [];
  }
}

export default cloudinary;
