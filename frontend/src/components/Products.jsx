import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';

export const Products = () => {
<<<<<<< HEAD
	const [product, setProduct] = useState([
		{
			id: 1,
			img: lampara,
			name: "Product XYZ",
			category: lampara,
			price: 20,
		},
		{
			id: 2,
			img: lampara2,
			name: "Product XYZ",
			category: lampara,
			price: 18,
		},
		{
			id: 3,
			img: lampara3,
			name: "Product XYZ",
			category: lampara,
			price: 17,
		},
		{
			id: 4,
			img: lampara4,
			name: "Product XYZ",
			category: lampara,
			price: 12,
		},
		{
			id: 5,
			img: lampara5,
			name: "Product XYZ",
			category: lampara,
			price: 23,
		},
		,
		{
			id: 6,
			img: lampara6,
			name: "Product XYZ",
			category: lampara,
			price: 21,
		},
		{
			id: 7,
			img: lampara7,
			name: "Product XYZ",
			category: lampara,
			price: 28,
		},
		{
			id: 8,
			img: lampara8,
			name: "Product XYZ",
			category: lampara,
			price: 16,
		},
	]);
	const number = product.price;
	const formateado = (number) => {
		return number.toLocaleString("ES-es", {
			style: "currency",
			currency: "USD",
		});
	};
	return (
		<div className='container__products'>
			{product.map((product) => {
				return (
					<div className='card' key={product.id}>
						<div>
							<img src={product.img} />
							<p className='card__title'>{product.name}</p>
							<p className='card__price'>{formateado(product.price)}</p>
							<button className='card__button'>Ver producto</button>
						</div>
					</div>
				);
			})}
		</div>
	);
=======
 const { dispatch, products } = useContext(CartContext);

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
   {products.map((product) => {
    return (
     <div className='card' key={product.id}>
      <div>
       <img src={product.img} />
       <p className='card__title'>{product.name}</p>
       <p className='card__price'>{formateado(product.price)}</p>
       <button className='card__button'>Ver producto</button>
       <button className='card__button' onClick={() => addToCart(product.id)}>
        Agregar al carrito
       </button>
      </div>
     </div>
    );
   })}
  </div>
 );
>>>>>>> 1a949805bc18bc0616ce2e921aa20156e17ae316
};
