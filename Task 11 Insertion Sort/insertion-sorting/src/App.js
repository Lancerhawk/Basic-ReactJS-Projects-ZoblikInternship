import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputNumbers, setInputNumbers] = useState('');
  const [sortedNumbers, setSortedNumbers] = useState([]);

  // Insertion Sort Algorithm by striver
  const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) 
    {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) 
      {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  };

  const handleSort = () => {
    const numberArray = inputNumbers
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num)); // This is just to ensure valid numbers hehe
    const sortedArray = insertionSort([...numberArray]);
    setSortedNumbers(sortedArray);
  };

  return (
    <div className="app-container">
      <h1>Insertion Sort</h1>

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
