import { section_5 } from '@/db/data';
import { getImagesFromFoldersAuthor } from '@/lib/cloudinary';
import Gallery from '@/app/_components/layout/Gallery';

const data: string = section_5;

const Portfolio = async () => {
  const author = await getImagesFromFoldersAuthor();
  return (
    <section id="portfolio" className="bg-background_section_5 p-0">
      <div className="container mx-auto">
        <h2 className="z-10 justify-center rounded-3xl py-6 text-center">{data}</h2>
        <Gallery images={author} />
      </div>
    </section>
  );
};

export default Portfolio;
