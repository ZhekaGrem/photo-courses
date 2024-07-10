'use client';
import React from 'react';

type ClosePortal = {
  onClose?: () => void;
};

const PopUp = ({ onClose }: ClosePortal) => {
  return <div className="h-screen relative">PopUp</div>;
};

export default PopUp;
