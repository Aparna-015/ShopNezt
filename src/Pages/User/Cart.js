import { useEffect, useState } from "react";

const Cart = () => {
  const [cartitems, setCartitems] = useState([]);

  

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((data) => setCartitems(data));
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      
    </div>
  );
};

export default Cart;
