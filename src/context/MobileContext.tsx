import React, { createContext, useContext, useState, useEffect } from "react";

const MobileContext = createContext<boolean | undefined>(undefined);

export const MobileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );
    setIsMobile(mobile);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};

export const useIsMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error("useIsMobile must be used within a MobileProvider");
  }
  return context;
};
