import { LocalImageFolders, getColumnImages } from '@/lib/local-images';
import LocalGallery from '@/app/_components/layout/Gallery';
export default async function Portfolio() {
  return (
    <section id="portfolio" className="section-space">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Авторська фотографія</p>
            <h2>Портфоліо Олега Сернюка</h2>
          </div>
          <p>Світло, образ і композиція в роботах автора курсів.</p>
        </div>
        <LocalGallery columnImages={await getColumnImages(LocalImageFolders.AUTHOR_GALLERY)} />
      </div>
    </section>
  );
}
