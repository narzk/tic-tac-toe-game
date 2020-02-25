import React, { useState } from "react";
import "./boardStyle.scss";
import Square from "../Square";

export default function Board() {
  const [arrayState, setArrayState] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const renderSquare = i => {
    return <Square num={arrayState[i]} onClick={() => handelClick(i)} />;
  };
  const handelClick = i => {
    if (calculateWinner(arrayState) || arrayState[i]) {
      return;
    }
    const newSquares = [...arrayState];
    isNext ? (newSquares[i] = "X") : (newSquares[i] = "O");
    setArrayState(newSquares);
    isNext ? setIsNext(false) : setIsNext(true);
  };
  function calculateWinner(arrayState) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        arrayState[a] &&
        arrayState[a] === arrayState[b] &&
        arrayState[a] === arrayState[c]
      ) {
        return arrayState[a];
      }
    }
    return null;
  }

  return (
    <div className="board">
      <div className="board__title">Next Player is:{isNext ? " X" : " O"} </div>
      <div className="board__container">
        <div className="board__row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board__row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board__row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="board__winner">
        {" "}
        the winner is: {calculateWinner(arrayState)}
      </div>
    </div>
  );
}
