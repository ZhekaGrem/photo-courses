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

export async function getImagesFromFoldersFeedback(): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression('folder:screenphotoschool/students_photo/columns/*')
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
export async function getImagesFromFoldersTestimonial(): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression('folder:screenphotoschool/feedback/*')
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
      .expression('folder:screenphotoschool/author/*')
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
