// 'use client';
// import { Button } from '../common/Button';
// import { usePortal } from '@/app/_components/layout/PortalContext';
// import { section_6 } from '@/db/data';
// import CheckmarkIcon from '../common/Checkmark';

// const Price = () => {
//   const { isPortalOpen, setIsPortalOpen } = usePortal();
//   return (
//     <section id="price" className="bg-background_section_6">
//       <div className="section container text-text_1">
//         <h2>{section_6.title}</h2>
//         <div className="mx-auto p-6">
//           <div className="mb-8 flex items-center justify-between">
//             <h3 className="text-3xl font-bold">{section_6.title2}</h3>
//             <span className="rounded-full px-3 py-1 text-sm font-bold text-text_1">{section_6.span}</span>
//           </div>

//           <ul className="mb-8 space-y-4 text-lg">
//             {section_6.list.map((item, index) => (
//               <li key={index} className="flex items-center">
//                 <CheckmarkIcon />
//                 <span>
//                   <strong className="text-text_2">{item.textS}</strong> {item.text}
//                 </span>
//               </li>
//             ))}
//           </ul>

//           <div className="mb-8 flex flex-col items-center">
//             <p className="mb-2 w-full text-center text-lg line-through">{section_6.price.old_price}</p>
//             <p className="mb-4 text-center text-4xl font-bold text-text_1">{section_6.price.new_price}</p>
//             <p className="text-center text-sm text-text_1">{section_6.price.how_mгch_save}</p>
//           </div>
//           <div className="flex w-full justify-center">
//             <Button
//               onClick={() => setIsPortalOpen(true)}
//               text={section_6.button_text}
//               className="border border-solid bg-transparent py-2 text-2xl font-bold hover:border-black hover:bg-transparent hover:text-text_1 md:px-6 xl:w-[40%]"
//             />
//           </div>
//         </div>

//         {/* <div className="mt-12 text-center">
//           <h2 className="text-2xl font-bold mb-4 text-text_1">{section_6.title_reviews}</h2>
//           <ul className="flex justify-center space-x-4">
//             {section_6.reviews.map((item, index) => (
//               <li key={index} className=" p-4 rounded-lg shadow max-w-xs">
//                 <h2>тут будеп відео</h2>
//                 <iframe
//                 className="rounded-3xl bg-white"
//                 width="300"
//                 height="350"
//                 src=""
//                 title="YouTube video player"
//                 allowFullScreen></iframe>
//                 <p className="italic mb-2">{item.text}</p>
//                 <p className="font-bold text-text_1">{item.name}</p>
//               </li>
//             ))}
//           </ul>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Price;
