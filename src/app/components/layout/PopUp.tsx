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
      <form  >
        <label>
          <input
            placeholder="Ваше ім'я"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="як з вами звязатись?"
            name="clientdata"
            value={formData.clientdata}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <input type="submit" value="Замовити" />
        </label>
      </form>
    </>
  );
};

export default PopUp;
