import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputArray, setInputArray] = useState('');
  const [sumResult, setSumResult] = useState('');
  const [largestNumber, setLargestNumber] = useState('');

  const sumArray = (numbers) => numbers.reduce((sum, num) => sum + num, 0);
  
  const findLargestNumber = (numbers) => Math.max(...numbers);

  const handleCalculateSum = () => {
    const numbers = inputArray
      .split(',')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));

    if (numbers.length === 0) {
      setSumResult('Please enter a valid array of numbers.');
      return;
    }

    setSumResult(sumArray(numbers));
  };

  const handleCalculateLargest = () => {
    const numbers = inputArray
      .split(',')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));

    if (numbers.length === 0) {
      setLargestNumber('Please enter a valid array of numbers.');
      return;
    }

    setLargestNumber(findLargestNumber(numbers));
  };

  return (
    <div className="app-container">
      <h1>Array Operations</h1>

      <div className="input-container">
        <label>Enter an Array of Numbers (comma-separated):</label>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          placeholder="e.g., 1, 2, 3, 4"
          className="array-input"
        />
      </div>

      <div className="button-container">
        <button onClick={handleCalculateSum} className="calculate-sum-button">
          Calculate Sum
        </button>
        <button onClick={handleCalculateLargest} className="calculate-largest-button">
          Find Largest Number
        </button>
      </div>

      <div className="result-box">
        <div>
          <label>Sum of Numbers:</label>
          <div className="result-output">{sumResult}</div>
        </div>
        <div>
          <label>Largest Number:</label>
          <div className="result-output">{largestNumber}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
