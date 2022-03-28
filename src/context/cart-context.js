import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer";

const CartContext = createContext({ quantity: 0 });

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    quantity: 0,
    totalPrice: 0,
    totalDiscountedPrice: 0,
    itemsInCart: [],
    wishlistItems: [],
  });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
