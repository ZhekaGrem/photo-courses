'use client';
import React, { createContext, useState, useContext } from 'react';
import Portal from '../app/_components/layout/Portal';

type PortalContextType = {
  isPortalOpen: boolean;
  setIsPortalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  amount?: string;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  setAmount?: React.Dispatch<React.SetStateAction<string>>;
  variantId?: string;
  setVariantId?: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const PortalContext = createContext<PortalContextType | undefined>(undefined);

export const PortalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [variantId, setVariantId] = useState<string | undefined>('faststart');

  return (
    <PortalContext.Provider
      value={{ isPortalOpen, setIsPortalOpen, title, setTitle, variantId, setVariantId, amount, setAmount }}>
      {children}
      {isPortalOpen && <Portal title={title} amount={amount} onClose={() => setIsPortalOpen(false)} />}
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
