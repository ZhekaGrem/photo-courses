'use client';
import React,{useState} from 'react';

type ClosePortal = {
  onClose?: () => void;
};

const PopUp = ({ onClose }: ClosePortal) => {
    const [formData, setFormData] = useState({
      name: '',
      clientdata: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form>
        <div className="flex flex-col gap-6 w-72">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              value={formData.name}
              onChange={handleChange}
              placeholder={`Ваше ім'я`}
              type="text"
              name="name"
              required
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
             {` Ваше ім'я`}
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              value={formData.name}
              onChange={handleChange}
              placeholder={`Ваше ім'я`}
              type="text"
              name="name"
              required
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
             {` Ваше ім'я`}
            </label>
          </div>
          
          <label>
            <input className=' text-white' type="submit" value="Замовити" />
          </label>
        </div>
      </form>
    </>
  );
};

export default PopUp;
