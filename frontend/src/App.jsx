import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Answers from './pages/Answers';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import Privacy from './pages/privacy';
import Work from './pages/work';
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

export default App;
