import { section_5 } from '@/db/data';
import Gallery from '@/app/_components/layout/Gallery'; // Updated import
import { getColumnImages, ColumnImages, CloudinaryFolders } from '@/lib/cloudinary';

const data: string = section_5;

const Portfolio = async () => {
  const studentColumnImages: ColumnImages = await getColumnImages(CloudinaryFolders.AUTHOR);

  return (
    <section id="portfolio" className="bg-background_section_5 pb-20">
      <div className="container mx-auto">
        <h2 className="z-10 justify-center rounded-3xl py-6 text-center">{data}</h2>
        <Gallery columnImages={studentColumnImages} />
      </div>
    </section>
  );
};

export default Portfolio;
