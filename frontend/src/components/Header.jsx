import logo from '../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';

export const Header = ({ setModal, setAnimarModal, user, setUser }) => {
 const { cart, dispatch } = useContext(CartContext);

 const navigate = useNavigate();

 const onHandleModal = () => {
  setModal(true);
  setTimeout(() => {
   setAnimarModal(true);
  }, 500);
 };

 const logOut = () => {
  setUser(null);
  window.localStorage.removeItem('loggedAppUser');
 };

 useEffect(() => {
  dispatch({ type: TYPES.CLREAR_CART });
 }, []);

 return (
  <div className='container'>
   <div className='header'>
    <div>
     <Link to='/'>
      <img className='header__logo' src={logo} alt='logotipo' />
     </Link>
    </div>
    <div className='search'>
     <input
      className='header__search'
      type='text'
      placeholder='¿Qué deseas buscar?'
     />
    </div>
    {user ? (
     <div className='profile'>
      <p>Hola, {user}!</p>
      <span onClick={() => logOut()}>
       <VscAccount size={35} />
      </span>
      <AiOutlineShoppingCart size={35} onClick={() => navigate('/cart')} />
     </div>
    ) : (
     <div className='profile'>
      <button className='header__button-login' onClick={onHandleModal}>
       Login
      </button>
      <AiOutlineShoppingCart size={35} onClick={() => navigate('/cart')} />
     </div>
    )}
   </div>
   <div className='header__fondo'>
    <h3 className='header__title'>Black Friday</h3>
    <p className='header__subtitle'>
     Productos selecionados con 33% de descuento
    </p>
    <button className='header__button-new'>new</button>
   </div>
  </div>
 );
};
