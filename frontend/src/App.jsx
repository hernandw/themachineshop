import React, { useEffect, useState } from 'react';
import { Header, Footer } from './components/';
import { Outlet, useLocation } from 'react-router-dom';
import { Modal } from './components/Modal';
import { CartProvider } from './context/CartContext';

export const App = () => {
 const location = useLocation();
 console.log(location);
 const [modal, setModal] = useState(false);
 const [animarModal, setAnimarModal] = useState(false);
 const [user, setUser] = useState(null);
 const [cart, setCart] = useState({});

 useEffect(() => {
  const mylocal = window.localStorage.getItem('loggedAppUser');
  if (mylocal) {
   const loggedUser = JSON.parse(mylocal);
   setUser(loggedUser.username);
  }
 }, []);

 return (
  <CartProvider>
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
  </CartProvider>
 );
};
