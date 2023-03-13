import { createContext, useState, useContext } from "react";

const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeMobileMenu = (newData) => {
    setMobileMenu(newData);
  };

  return (
    <MobileMenuContext.Provider value={{ mobileMenu, changeMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export function useMobileMenuContext() {
  return useContext(MobileMenuContext);
}

export default MobileMenuContext;
