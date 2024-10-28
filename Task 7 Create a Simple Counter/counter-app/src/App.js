import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    console.log(`Incremented: ${count + 1}`);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    console.log(`Decremented: ${count > 0 ? count - 1 : 0}`);
  };

  const handleReset = () => {
    setCount(0);
    console.log("Counter reset to 0");
  };

  return (
    <div className="app-container">
      <h1>Counter App</h1>
      <div className="counter-display">{count}</div>
      
      <div className="button-container">
        <button onClick={handleIncrement} className="increment-button">Increment</button>
        <button onClick={handleDecrement} className="decrement-button">Decrement</button>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
    </div>
  );
}

export default App;
