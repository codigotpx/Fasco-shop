import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [ isUserOpen, setIsUserOpen ] = useState(false)

  return (
    <NavbarContext.Provider value={{ 
      isCartOpen, 
      setIsCartOpen, 
      cart, 
      setCart,
      isUserOpen,
      setIsUserOpen
    }}>
      {children}
    </NavbarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavbar() {
  return useContext(NavbarContext);
}