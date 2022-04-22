import './index.css';
import React from 'react';
import Design from './components/Calculator';

function App() {
  const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  
  return (
    <div className="App">
      <header className="App-header">
        <Design data={buttonNames} />
      </header>
    </div>
  );
}

export default App;
