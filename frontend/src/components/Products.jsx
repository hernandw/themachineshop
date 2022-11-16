import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';
import swal from 'sweetalert';
import { Loader } from './Loader';

export const Products = () => {
 const { dispatch, state } = useContext(CartContext);
 const { products } = state;

 const addToCart = (id) => {
  dispatch({ type: TYPES.ADD_TO_CART, payload: id });
 };

 const formateado = (number) => {
  return number.toLocaleString('ES-es', {
   style: 'currency',
   currency: 'USD',
  });
 };

 return (
  <div className='container__products'>
   {products
    ? products.map((product) => {
       return (
        <div className='card' key={product.id_product}>
         <div className='insideCard'>
          <img src={product.product_image_url} referrerPolicy='no-referrer' />
          <p className='card__title'>{product.product_name}</p>
          <p className='card__price'>{formateado(product.product_price)}</p>
          <button className='card__button'>Ver producto</button>
          <button
           className='card__button'
           onClick={() => {
            addToCart(product.id_product);
            swal('Producto agregado al carrito', '', 'success');
           }}>
           Agregar al carrito
          </button>
         </div>
        </div>
       );
      })
    : null}
  </div>
 );
};
