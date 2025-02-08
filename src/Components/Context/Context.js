import { createContext, useState } from "react";

export const CartContext = createContext();

const Cartprovider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (data) => {
    setCarts((prevCart) => {
      const itemExists = prevCart.find(
        (item) => item.id === data.id && item.category === data.category
      );

      if (itemExists) {
        alert("Product is already in the cart");
        return prevCart;
       
        
      } else {
        return [...prevCart, data];
      }
    });
  };

  return (
    <CartContext.Provider value={{ carts, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
