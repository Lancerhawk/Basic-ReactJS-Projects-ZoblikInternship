import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [fibonacciSequence, setFibonacciSequence] = useState([]);

  const generateFibonacci = (num) => {
    let fib = [0, 1];
    while (true) {
      const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
      if (nextFib > num) break; 
      fib.push(nextFib);
    }
    return fib;
  };

  const handleGenerateFibonacci = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num) || num <= 0) {
      setFibonacciSequence(['Please enter a valid positive number.']);
    } else {
      const sequence = generateFibonacci(num);
      setFibonacciSequence(sequence);
    }
  };

  return (
    <div className="app-container">
      <h1>Fibonacci Generator</h1>

      <div className="input-container">
        <label>Enter a Number:</label>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Type a number..."
          className="number-input"
        />
      </div>

      <button onClick={handleGenerateFibonacci} className="generate-button">
        Generate Fibonacci
      </button>

      <div className="result-box">
        <label>Fibonacci Sequence:</label>
        <div className="result-output">
          {Array.isArray(fibonacciSequence)
            ? fibonacciSequence.join(', ')
            : fibonacciSequence}
        </div>
      </div>
    </div>
  );
}

export default App;
