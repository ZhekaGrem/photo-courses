'use client';
import React, { createContext, useState, useContext } from 'react';
import Portal from './Portal';

type PortalContextType = {
  isPortalOpen: boolean;
  setIsPortalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const PortalContext = createContext<PortalContextType | undefined>(undefined);

export const PortalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <PortalContext.Provider value={{ isPortalOpen, setIsPortalOpen }}>
      {children}
      {isPortalOpen && <Portal onClose={() => setIsPortalOpen(false)} />}
    </PortalContext.Provider>
  );
};

export function usePortal(): PortalContextType  {
     const context = useContext(PortalContext);
     if (context === undefined) {
       throw new Error('usePortal must be used within a PortalProvider');
     }
  return context;
};
