import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Design from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const data = {
    total: '0',
    operation: '',
    next: '',
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design data={buttonNames} obj={data} />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
