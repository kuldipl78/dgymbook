import React, { useState } from "react";
import WordRow from "../WordRow/WordRow";
import Keyboard from "../Keyboard/Keyboard";
import Message from "../Message/Message";
import { getRandomWord } from "../../utils/wordList";
import './index.css'
const GameBoard = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState("");
  const maxAttempts = 6;

  const handleKeyPress = (letter) => {
    if (letter === "ENTER" && currentGuess.length === 5) {
      if (!/^[a-zA-Z]{5}$/.test(currentGuess)) {
        setMessage("Invalid word!");
        return;
      }
      setGuesses([...guesses, currentGuess.toLowerCase()]);
      setCurrentGuess("");
      if (currentGuess.toLowerCase() === targetWord) {
        setMessage("You Win!");
      } else if (guesses.length + 1 === maxAttempts) {
        setMessage(`Game Over! The word was "${targetWord}"`);
      }
    } else if (letter === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  const handleNewGame = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setMessage("");
  };

  return (
    <div className="game-container">
      <h1>Wordle Clone</h1>
      <div className="board">
        {Array.from({ length: maxAttempts }).map((_, index) => (
          <WordRow key={index} word={guesses[index] || (index === guesses.length ? currentGuess : "")} targetWord={targetWord} />
        ))}
      </div>
      {message && <Message message={message} />}
      <Keyboard onKeyPress={handleKeyPress} />
      <button className="new-game" onClick={handleNewGame}>New Game</button>
    </div>
  );
};

export default GameBoard;
