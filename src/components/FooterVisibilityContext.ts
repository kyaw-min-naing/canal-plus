import { createContext, useContext } from "react";

export const FooterVisibilityContext = createContext<{
  showFooter: boolean;
  setShowFooter: (value: boolean) => void;
  footerData: any;
  setFooterData: (data: any) => void;
}>({
  showFooter: false,
  setShowFooter: () => {},
  footerData: null,
  setFooterData: () => {},
});

export const useFooterVisibility = () => useContext(FooterVisibilityContext);
