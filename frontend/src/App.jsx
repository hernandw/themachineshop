/* import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Answers from './pages/Answers';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Work from './pages/Work';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <ul className="App-header">
            </ul>
          <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/answers' element={< Answers />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route exact path='/login' element={< Login />}></Route>
                <Route exact path='/privacy' element={< Privacy />}></Route>
                <Route exact path='/work' element={< Work />}></Route>
          </Routes>
          </div>
      </Router>
    );
  }
}

export default App; */

import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
