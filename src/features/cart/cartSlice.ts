import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/Cart"

interface cartState {
  carts: Cart[]
}

const initialState: cartState = {
  carts: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add_item: (state, action:PayloadAction<Cart>) => {
        const newItem : Cart = {
            userId:action.payload.userId,
            productID:action.payload.productID,
            quantity:action.payload.quantity
        };
        state.carts.push(newItem);
       },
       update_quantity: (state, action:PayloadAction<Cart>) => {
          const updatedCart = state.carts.map((cart)=>
          cart.productID === action.payload.productID
          ? {...cart, quantity:action.payload.quantity}
          :cart
          )
          return {...state, carts:updatedCart}
        }
    },
})

export const { add_item, update_quantity } = cartSlice.actions
export default cartSlice.reducer