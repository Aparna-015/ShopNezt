import React, { useContext } from 'react'
import { CartContext } from '../../Components/Context/Context'

const Cart = () => {

  const {carts}=useContext(CartContext)
  console.log(carts,"items");

  
  return (
    <div>
          
      {carts?.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <h3>${item.price}</h3>
          <img src={item.image} alt=""/>
          <button>-</button>1
          <button>+</button>
        </div>

      ))}
    </div>
  );
};


export default Cart