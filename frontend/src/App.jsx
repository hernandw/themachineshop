import { useEffect, useState, useContext } from 'react';
import { Header, Footer } from './components/';
import { Outlet, useLocation } from 'react-router-dom';
import { Modal } from './components/Modal';
import CartContext from './context/CartContext';
import { useGetProducts } from './hooks/useGetProducts';

export const App = () => {
 const { dispatch } = useContext(CartContext);
 //const location = useLocation();
 const [modal, setModal] = useState(false);
 const [animarModal, setAnimarModal] = useState(false);
 const [user, setUser] = useState(null);

 const { getAllProducts } = useGetProducts();

 useEffect(() => {
  const mylocal = window.localStorage.getItem('loggedAppUser');
  if (mylocal) {
   const loggedUser = JSON.parse(mylocal);
   setUser(loggedUser.username);
  }
  getAllProducts();
 }, []);

 return (
  <div className={modal ? 'fijar' : ''}>
   <Header
    setModal={setModal}
    setAnimarModal={setAnimarModal}
    user={user}
    setUser={setUser}
   />
   <Outlet />
   <Footer />
   {modal && (
    <Modal
     setModal={setModal}
     animarModal={animarModal}
     setAnimarModal={setAnimarModal}
     setUser={setUser}
    />
   )}
  </div>
 );
};
