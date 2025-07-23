import React, { useState } from "react";
import { FooterVisibilityContext } from "./FooterVisibilityContext";

export const FooterVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [showFooter, setShowFooter] = useState(false);
  const [footerData, setFooterData] = useState<any>(null);

  return (
    <FooterVisibilityContext.Provider value={{ showFooter, setShowFooter, footerData, setFooterData }}>
      {children}
    </FooterVisibilityContext.Provider>
  );
};
