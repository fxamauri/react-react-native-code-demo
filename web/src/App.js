import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <h1>O que se pode fazer com javascript hoje em dia</h1>
      <span>{counter}</span>
      <div className="content">
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleIncrement}>Incrementar</button>
      </div>
    </div>
  );
}

export default App;
