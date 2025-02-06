import React from "react";

const WordRow = ({ word = "", targetWord }) => {
  const getColor = (letter, index) => {
    if (!targetWord.includes(letter)) return "gray";
    if (targetWord[index] === letter) return "green";
    return "yellow";
  };

  return (
    <div className="word-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`letter ${getColor(word[i], i)}`}>{word[i] || ""}</span>
      ))}
    </div>
  );
};

export default WordRow;
