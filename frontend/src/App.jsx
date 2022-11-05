import React, { useState } from "react";
import { Header, Footer, Modal } from "./components/";
import { Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const location = useLocation()
  console.log(location)
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header setModal={setModal} setAnimarModal={setAnimarModal}/>
      <Outlet />
      <Footer />
      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} />}
    </div>
  );
};
