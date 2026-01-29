import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [ isUserOpen, setIsUserOpen ] = useState(false)
  const [ wishList, setWishList ] = useState([])
  const [ isWishListOpen, setIsWishListOpen ] = useState(false)



  const updateQuantity = (product, delta) => {
        const itemUpdate = cart.find(item => item.id === product.id)


        if (!itemUpdate) {
          setCart([...cart, { ...product, quantity: 1 }])
          return
        }

        const nextQuantity = itemUpdate.quantity + delta

        if (nextQuantity < 1) {
            const confimed = window.confirm("Do you want to remove this product from your cart?")

            if(confimed) {
                const filterCart = cart.filter(item => item.id !== product.id)
                setCart(filterCart)
            }
        } else{
            const updateItem = cart.map(item => item.id === product.id ? 
                {...item, quantity: nextQuantity} : item
            )

            setCart(updateItem)
        }

    }



  return (
    <NavbarContext.Provider value={{ 
      isCartOpen, 
      setIsCartOpen, 
      cart, 
      setCart,
      isUserOpen,
      setIsUserOpen,
      wishList,
      setWishList,
      isWishListOpen,
      setIsWishListOpen,
      updateQuantity
    }}>
      {children}
    </NavbarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavbar() {
  return useContext(NavbarContext);
}