import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';
CartContext;
export function Cart() {
 const { dispatch, state } = useContext(CartContext);
 const { cart } = state;

 const addToCart = (id) => {
  dispatch({ type: TYPES.ADD_TO_CART, payload: id });
 };

 const delFromCart = (id, all = false) => {
  if (all) {
   dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  } else {
   dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  }
 };

 const clearCart = () => {
  dispatch({ type: TYPES.CLEAR_CART });
 };

 const formateado = (number) => {
  return number.toLocaleString('ES-es', {
   style: 'currency',
   currency: 'USD',
  });
 };
 return (
  <>
   <div>
   <h3>Carrito</h3>
   </div>
   <article className='box'>
    <button onClick={clearCart}>Limpiar Carrito</button>
    {cart.length > 0
     ? cart.map((product) => (
        <div className='cardCart' key={product.id}>
         <div>  
          <img className='cardCartImg' src={product.img} />
          </div>
          <p className='card__title'>{product.name}</p>
          <button onClick={() => { delFromCart(product.id, true);
          swal("Producto eliminado del carrito","","success")}}>
           eliminar producto
          </button>
          <div className='cardCartMoreOrLess'>
          <button className='buttonMoreOrLess' onClick={() => delFromCart(product.id)}>-</button>
          <p>{product.quantity}</p>
          <button className='buttonMoreOrLess' onClick={() => addToCart(product.id)}>+</button>
          </div>
          <div className='cardCartPrice'>
          <p className='card__price'>{formateado(product.price)}</p>
          </div>
        </div>
       ))
     : 'tu carrito esta vacio!'}
     <h3 className='subTotal'>
      Sub-Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00
     </h3>
   </article>
  </>
 );
}
