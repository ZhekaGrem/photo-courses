'use client';
import React, { createContext, useState, useContext } from 'react';
import Portal from '../app/_components/layout/Portal';

type PortalContextType = {
  isPortalOpen: boolean;
  setIsPortalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  variantId?: string;
  setVariantId?: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const PortalContext = createContext<PortalContextType | undefined>(undefined);

export const PortalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [variantId, setVariantId] = useState<string | undefined>('basic');

  return (
    <PortalContext.Provider
      value={{ isPortalOpen, setIsPortalOpen, title, setTitle, variantId, setVariantId }}>
      {children}
      {isPortalOpen && <Portal title={title} onClose={() => setIsPortalOpen(false)} />}
    </PortalContext.Provider>
  );
};

export function usePortal(): PortalContextType {
  const context = useContext(PortalContext);
  if (context === undefined) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
}
