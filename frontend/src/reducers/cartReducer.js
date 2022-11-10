import { TYPES } from '../actions/cartActions';
import lampara from '../assets/images/lampara.jpeg';
import lampara2 from '../assets/images/lampara2.jpeg';
import lampara3 from '../assets/images/lampara3.jpeg';
import lampara4 from '../assets/images/lampara4.jpeg';
import lampara5 from '../assets/images/lampara5.jpeg';
import lampara6 from '../assets/images/lampara6.jpeg';
import lampara7 from '../assets/images/lampara7.jpeg';
import lampara8 from '../assets/images/lampara8.jpeg';

export const cartInitialState = {
 products: [
  {
   id: 1,
   img: lampara,
   name: 'Product XYZ',
   category: lampara,
   price: 20,
  },
  {
   id: 2,
   img: lampara2,
   name: 'Product XYZ',
   category: lampara,
   price: 18,
  },
  {
   id: 3,
   img: lampara3,
   name: 'Product XYZ',
   category: lampara,
   price: 17,
  },
  {
   id: 4,
   img: lampara4,
   name: 'Product XYZ',
   category: lampara,
   price: 12,
  },
  {
   id: 5,
   img: lampara5,
   name: 'Product XYZ',
   category: lampara,
   price: 23,
  },
  {
   id: 6,
   img: lampara6,
   name: 'Product XYZ',
   category: lampara,
   price: 21,
  },
  {
   id: 7,
   img: lampara7,
   name: 'Product XYZ',
   category: lampara,
   price: 28,
  },
  {
   id: 8,
   img: lampara8,
   name: 'Product XYZ',
   category: lampara,
   price: 16,
  },
 ],
 cart: [],
};

const hiii = console.log('holaaa');

export function cartReducer(state, action) {
 switch (action.type) {
  case TYPES.ADD_TO_CART: {
   const newItem = state.products.find(
    (product) => product.id === action.payload
   );

   const itemInCart = state.cart.find((item) => item.id === newItem.id);

   return itemInCart
    ? {
       ...state,
       cart: state.cart.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
       ),
      }
    : {
       ...state,
       cart: [...state.cart, { ...newItem, quantity: 1 }],
      };
  }

  case TYPES.REMOVE_ONE_FROM_CART: {
   const itemToDelete = state.cart.find((item) => item.id === action.payload);

   return itemToDelete.quantity > 1
    ? {
       ...state,
       cart: state.cart.map((item) =>
        item.id === action.payload
         ? { ...item, quantity: item.quantity - 1 }
         : item
       ),
      }
    : {
       ...state,
       cart: state.cart.filter((item) => item.id !== action.payload),
      };
  }
  case TYPES.REMOVE_ALL_FROM_CART:
   return {
    ...state,
    cart: state.cart.filter((item) => item.id !== action.payload),
   };
  case TYPES.CLEAR_CART:
   return cartInitialState;

  case TYPES.GET_CART:
   return hiii;

  default:
   return state;
 }
}
