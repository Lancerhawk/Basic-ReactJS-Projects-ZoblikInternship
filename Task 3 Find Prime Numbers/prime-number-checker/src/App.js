import React, { useState } from 'react';
import './App.css'; // Include for styling

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState('');

  const isPrime = (num) => {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheckPrime = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num)) {
      setResult('Please enter a valid number!!');
    } else if (isPrime(num)) {
      setResult(`Yes, ${num} is a prime number.`);
    } else {
      setResult(`No, ${num} is not a prime number.`);
    }
  };

  return (
    <div className="app-container">
      <h1>Prime Number Checker</h1>

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

      <button onClick={handleCheckPrime} className="check-button">
        Check Prime
      </button>

      <div className="result-box">
        <label>Result:</label>
        <div className="result-output">{result}</div>
      </div>
    </div>
  );
}

export default App;
