'use client';
import { Suspense, lazy } from 'react';
import { data_section_2 } from '@/db/data';
import Loading from '@/app/loading';
const BigScreenProgram = lazy(() => import('../layout/BigScreenProgram'));
const PhoneScreenProgram = lazy(() => import('../layout/PhoneScreenProgram'));
import { usePortal } from '@/context/PortalContext';

// type InfoType = {
//   title_2: string;
//   program: Array<{
//     id: number;
//     title: string;
//     content: {
//       title: string;
//       title2: string;
//       list: Array<string>;
//       img: string;
//       img_alt: string;
//       video?: string;
//     };
//   }>;
// };
type ProgramContentType = {
  title: string;
  title2: string;
  list: Array<string>;
  img: string;
  img_alt: string;
  video?: string;
};

type ProgramItemType = {
  id: number;
  title: string;
  content: ProgramContentType;
};

type VariantType = {
  id: string;
  title_2: string;
  program: Array<ProgramItemType>;
};

type DataSection2Type = {
  variants: Array<VariantType>;
};

const data: DataSection2Type = data_section_2;
const CourseProgram = () => {
  const { variantId } = usePortal();
  const selectedVariant = data.variants.find((variant) => variant.id === variantId);

  if (!selectedVariant) {
    return <div>Variant not found</div>;
  }
  return (
    <section id="program" className="bg-background_header">
      <div className="section container text-text_2">
        <h2 className="text-center text-2xl sm:text-left sm:text-5xl">{selectedVariant.title_2}</h2>
        <Suspense fallback={<Loading />}>
          <div className="big-screen">
            <BigScreenProgram data={selectedVariant.program} />
          </div>
          <div className="phone-screen">
            <PhoneScreenProgram data={selectedVariant.program} />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default CourseProgram;
