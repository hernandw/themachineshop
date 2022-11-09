import React from 'react';
import productImage from '../assets/images/lampara.jpeg';

export function Cart() {
 return (
  <div>
   <h1>Carrito</h1>
   <div className=''>
    <div className='card'>
     <div>
      <img src={productImage} />
      <p className='card__title'></p>
      <p className='card__price'>132</p>
      <button className='card__button'>Ver producto</button>
     </div>
    </div>
    <div className='card'>
     <div>
      <img src={productImage} />
      <p className='card__title'>asd</p>
      <p className='card__price'>132</p>
      <button className='card__button'>Ver producto</button>
     </div>
    </div>
   </div>
   <h2>subtotal</h2>
  </div>
 );
}
