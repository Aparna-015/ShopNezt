import {  useState } from "react";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/Features/CartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
const cartitems=useSelector((state)=>state.cart.cartitems)
console.log(cartitems);
const dispatch = useDispatch();  

const handlecart =(id)=>{

  dispatch(removeFromCart(id))

}
  return (
    <div><h2>Shopping Cart</h2>
    {cartitems.length === 0 ? <p>Cart is empty</p> : null}
    {cartitems.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title} width="50px" />
        <h4>${item.price}</h4>
        <button onClick={() => handlecart(item.id)}>Remove</button> 
      </div>
    ))}</div>
  )
};

export default Cart;
