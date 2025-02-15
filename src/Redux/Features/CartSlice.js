import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartitems: [],
  },
  reducers: {
    addTocart: (state, action) => {
        const Item = state.cartitems.find(item => item.id === action.payload.id);

        if (!Item) {
          state.cartitems.push(action.payload);
        }else{
            alert('product is in the cart')
        }
    },
        removeFromCart: (state, action) => {
            state.cartitems = state.cartitems.filter(item => item.id !== action.payload);
          

    },
  },
});

export const {addTocart, removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;
