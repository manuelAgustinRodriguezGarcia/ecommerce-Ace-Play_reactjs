import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
  const [counterCart, setCounterCart] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{counterCart, setCounterCart, cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}