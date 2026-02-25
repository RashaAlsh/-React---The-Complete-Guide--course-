import { useState } from "react";

export default function GameBoard({onSelectSquare , activePlayerSymbol}) {

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // Create deep copy of board
      const updatedBoard = prevGameBoard.map((row) => [...row]);

      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

      return updatedBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}