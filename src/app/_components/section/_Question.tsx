// 'use client';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// import { section_7 } from '@/db/data';

// type IndexType = number | null;

// type HandleClickButton = (index: number) => void;

// const Question = () => {
//   const [openIndex, setOpenIndex] = useState<IndexType>(null);
//   const handleButtonClick: HandleClickButton = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <section className="bg-background_section_7">
//       <div className="section container">
//         <h2 className="mb-12 text-text_1">{section_7.title}</h2>
//         <div className="flex flex-col items-start gap-12 lg:flex-row">
//           <div className="w-full p-6 lg:w-1/2">
//             <ul className="space-y-4">
//               {section_7.faqs.map((item, index) => (
//                 <motion.li
//                   key={item.key}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="rounded-lg bg-white shadow-md">
//                   <button
//                     className="w-full p-6 text-left focus:outline-none"
//                     onClick={() => handleButtonClick(index)}>
//                     <div className="flex items-center justify-between">
//                       <p className="text-xl font-semibold text-gray-800">{item.title}</p>
//                       <svg
//                         className={`h-6 min-w-6 transform transition-transform duration-300 ${
//                           openIndex === index ? 'rotate-180' : ''
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </button>
//                   <AnimatePresence>
//                     {openIndex === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: 'auto', opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}>
//                         <div className="px-6 pb-6 text-gray-600">
//                           <p>{item.description}</p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-full lg:w-1/2">
//             <div className="relative">
//               <Image
//                 loading="lazy"
//                 className="rounded-lg shadow-2xl"
//                 src="/ICH_7748-копія-2-1.png"
//                 width={800}
//                 height={860}
//                 alt="Фотограф за роботою"
//               />
//               <div className="absolute inset-0 rounded-lg bg-gradient-to-t to-transparent"></div>
//               <div className="absolute bottom-0 left-0 p-8 text-white">
//                 <h3 className="mb-2 text-3xl font-bold">{section_7.text1}</h3>
//                 <p className="text-xl">{section_7.text2}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Question;
