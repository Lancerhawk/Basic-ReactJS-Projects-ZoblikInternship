import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputNumbers, setInputNumbers] = useState('');
  const [sortedNumbers, setSortedNumbers] = useState([]);

  // Selection Sort Algorithm by codex
  const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // this thing swaps elements apparently
      }
    }
    return arr;
  };

  const handleSort = () => {
    const numberArray = inputNumbers
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num)); // Ensure valid numbers as always lol
    const sortedArray = selectionSort([...numberArray]);
    setSortedNumbers(sortedArray);
  };

  return (
    <div className="app-container">
      <h1>Selection Sort</h1>

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
