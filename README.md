# Wordle Clone - React App

##  Project Overview
This is a simple Wordle clone built using **React** and **CSS**. The game allows users to guess a 5-letter word within 6 attempts, providing color-coded feedback on their guesses.

##  Features
-  **Game Logic**:  
  - 6 attempts to guess a 5-letter word.
  - Green: Correct letter in the correct position.
  - Yellow: Correct letter in the wrong position.
  - Gray: Incorrect letter.
  - Prevents invalid word submissions.
-  **UI/UX**:  
  - Grid display for previous guesses with feedback.
  - Win/Loss message display.
  - “New Game” button to restart the game.
- **State Management**:  
  - Maintains guessed words, remaining attempts, and game status.
-  **Styling**:  
  - Fully responsive using CSS.
-  **Bonus Features** (if implemented):  
  - Letter feedback animations.

## Folder Structure
src/ │── components/ │ ├── GameBoard/GameBoard.js │ ├── Keyboard/Keyboard.js │ ├── WordRow/WordRow.js │ ├── Message/Message.js │── utils/ │ ├── wordList.js │── App.js │── index.css │── App.css


##  Installation & Running the Project
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/wordle-clone.git
2. Navigate to the Project Folder:
   cd wordle-clone
3. Install Dependencies:
   npm install
4. Start the Development Server:
   npm start





