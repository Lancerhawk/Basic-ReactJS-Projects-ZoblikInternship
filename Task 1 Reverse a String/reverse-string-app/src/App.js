import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [inputText, setInputText] = useState('');
  const [reversedText, setReversedText] = useState('');

  // Function to reverse the string using a loop
  const reverseString = (text) => {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
      reversed += text[i];
    }
    return reversed;
  };

  const handleReverse = () => {
    setReversedText(reverseString(inputText));
  };

  return (
    <div className="app-container">
      <h1>Reverse Your Text</h1>
      
      <div className="input-container">
        <label>Enter Your Text to Reverse:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type something..."
          className="text-input"
        />
      </div>
      
      <button onClick={handleReverse} className="reverse-button">Reverse</button>
      
      <div className="result-box">
        <label>Reversed Text:</label>
        <div className="reversed-output">{reversedText}</div>
      </div>
    </div>
  );
}

export default App;
