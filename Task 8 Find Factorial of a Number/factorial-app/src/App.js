import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateFactorial = (num) => {
    if (num === 0 || num === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const handleCalculate = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num) || num < 0) {
      setResult('Please enter a valid non-negative integer.');
    } else {
      setResult(`Factorial of ${num} is ${calculateFactorial(num)}`);
    }
  };

  return (
    <div className="app-container">
      <h1>Factorial Calculator</h1>
      
      <div className="input-container">
        <label>Enter a Number:</label>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Type a non-negative integer..."
          className="number-input"
        />
      </div>

      <button onClick={handleCalculate} className="calculate-button">
        Calculate Factorial
      </button>

      <div className="result-box">
        <label>Result:</label>
        <div className="result-output">{result}</div>
      </div>
    </div>
  );
}

export default App;
