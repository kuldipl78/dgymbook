import React from "react";

const Keyboard = ({ onKeyPress }) => {
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <button key={key} className="key" onClick={() => onKeyPress(key)}>{key}</button>
      ))}
      <button className="key special" onClick={() => onKeyPress("BACKSPACE")}>⌫</button>
      <button className="key special" onClick={() => onKeyPress("ENTER")}>Enter</button>
    </div>
  );
};

export default Keyboard;
