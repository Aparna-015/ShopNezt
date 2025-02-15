import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";


const Header = () => {
  const cart=useSelector((state)=>state.cart.cartitems)
  console.log(cart);
  

  return (
    <header class="header">
      <div class="logo">Logo</div>

      <div class="search">
        <input type="text" placeholder="Search ..." />
        <button className="button1">🔍</button>
      </div>
   
      <div className="cart_icon">
       
        <AiOutlineShoppingCart />
        <span className="cart-count">{cart.length}</span>
        </div>
        {/* <div>   <button className="btn1">Login</button>
        </div> */}
     
    </header>
  );
};

export default Header;
