import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Modal } from './components/Modal'
export const App = () => {
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
