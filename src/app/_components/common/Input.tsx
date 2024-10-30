// import React from 'react';

// function Input({ errors, placeholder, type, className, text, ...props }) {
//   return (
//     <div className="relative h-11 w-full min-w-[200px]">
//       <input
//         {...register('name')}
//         placeholder="Ім'я"
//         type="text"
//         className={`peer h-full w-full border-b border-white bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 ${
//           errors.name ? 'border-red-500' : ''
//         } ${isSubmitted && !errors.name ? 'border-green-500' : ''}`}
//       />
//       <label
//         className={`after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white ${
//           errors.name ? 'text-red-500' : 'text-white'
//         }`}>
//         {text}
//         {errors.name && <p className="pl-1 text-sm text-red-500">{errors.name.message}</p>}
//       </label>
//     </div>
//   );
// }

// export default Input;
