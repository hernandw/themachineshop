import { createContext, useState, useEffect, useReducer } from 'react';
import { cartReducer, cartInitialState } from '../reducers/cartReducer';
const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
 const [state, dispatch] = useReducer(cartReducer, cartInitialState);
 const { products, cart } = state;

 const contextData = { dispatch, products, cart };

 return (
  <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
 );
};
