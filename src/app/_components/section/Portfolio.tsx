import { LocalImageFolders, getColumnImages } from '@/lib/local-images';
import LocalGallery from '@/app/_components/layout/Gallery';

const Portfolio = () => {
  // Отримуємо зображення автора з локальних папок
  const authorColumnImages = getColumnImages(LocalImageFolders.AUTHOR_GALLERY);

  return (
    <section id="portfolio" className="bg-pageant_blue pb-20 text-cloud_dancer">
      <div className="container mx-auto">
        <h2 className="z-10 justify-center rounded-3xl py-6 text-center">ПОРТФОЛІО</h2>
        <LocalGallery columnImages={authorColumnImages} />
      </div>
    </section>
  );
};

export default Portfolio;
