import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const isPalindrome = (text) => {
    const sanitizedText = text.toLowerCase().replace(/[^a-z0-9]/g, ''); //This is for removing non alphabetical Orders
    const reversedText = sanitizedText.split('').reverse().join('');
    return sanitizedText === reversedText;
  };

  const handleCheckPalindrome = () => {
    if (isPalindrome(inputText)) {
      setResult('Yes, this is a palindrome!');
    } else {
      setResult('No, this is not a palindrome.');
    }
  };

  return (
    <div className="app-container">
      <h1>Palindrome Checker</h1>

      <div className="input-container">
        <label>Enter Your Text:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type something..."
          className="text-input"
        />
      </div>

      <button onClick={handleCheckPalindrome} className="check-button">
        Check Palindrome
      </button>

      <div className="result-box">
        <label>Result:</label>
        <div className="result-output">{result}</div>
      </div>
    </div>
  );
}

export default App;
