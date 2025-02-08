import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {

  return (
    <header class="header">
      <div class="logo">Logo</div>

      <div class="search">
        <input type="text" placeholder="Search ..." />
        <button className="button1">🔍</button>
      </div>
      <div className="buttons">
       
        <AiOutlineShoppingCart />
        <button className="btn1">Login</button>

      </div>
      
    </header>
  );
};

export default Header;
