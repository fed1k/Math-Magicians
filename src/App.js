import './index.css';
import React from 'react';
import Design from './components/Calculator';
import Navbar from './components/Navbar';

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
        <Design data={buttonNames} obj={data} />
      </header>
    </div>
  );
}

export default App;
