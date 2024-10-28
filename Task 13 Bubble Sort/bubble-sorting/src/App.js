import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputNumbers, setInputNumbers] = useState('');
  const [sortedNumbers, setSortedNumbers] = useState([]);

  // Bubble Sort Algorithm
  const bubbleSort = (arr) => {
    const n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };

  const handleSort = () => {
    const numberArray = inputNumbers
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num)); // Ensure valid numbers
    const sortedArray = bubbleSort([...numberArray]);
    setSortedNumbers(sortedArray);
  };

  return (
    <div className="app-container">
      <h1>Bubble Sort</h1>

      <div className="input-container">
        <label>Enter Numbers (comma-separated):</label>
        <input
          type="text"
          value={inputNumbers}
          onChange={(e) => setInputNumbers(e.target.value)}
          placeholder="e.g., 5, 3, 8, 1"
          className="number-input"
        />
      </div>

      <button onClick={handleSort} className="sort-button">
        Sort Numbers
      </button>

      <div className="result-box">
        <label>Sorted Numbers:</label>
        <div className="result-output">
          {sortedNumbers.length > 0 ? sortedNumbers.join(', ') : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
