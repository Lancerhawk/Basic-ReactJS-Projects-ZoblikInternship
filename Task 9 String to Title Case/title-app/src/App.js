import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [titleCaseText, setTitleCaseText] = useState('');

  const toTitleCase = (text) => {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleConvert = () => {
    setTitleCaseText(toTitleCase(inputText));
  };

  return (
    <div className="app-container">
      <h1>Title Case Converter</h1>

      <div className="input-container">
        <label>Enter Text:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a sentence..."
          className="text-input"
        />
      </div>

      <button onClick={handleConvert} className="convert-button">
        Convert to Title Case
      </button>

      <div className="result-box">
        <label>Result:</label>
        <div className="result-output">{titleCaseText}</div>
      </div>
    </div>
  );
}

export default App;
