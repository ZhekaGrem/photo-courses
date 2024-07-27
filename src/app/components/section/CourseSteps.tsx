'use client';
import React from 'react';
import { Button } from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';


const CourseSteps = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();
  return (
    <section className="imgBg3 flex min-h-screen bg-cover bg-center">
      <div className="container mx-auto"></div>
    </section>
  ); 
};

export default CourseSteps;
