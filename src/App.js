import './index.css';
import React from 'react';
import Design from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import { Routes, Route } from "react-router-dom";

function App() {
  const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const data = {
    total: '',
    operation: '',
    next: '0'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path='/design' element={<Design data={buttonNames} obj={data} />} />
          <Route path='/' element={<Home />} />
          <Route path='/quote' element={<Quote />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
