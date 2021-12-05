import React, { useEffect, useState } from "react";

export default function Board(props) {
  const [square, setSquare] = useState(new Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isMultiplayer, setIsMultiplayer] = useState(false);

  function onClickSquare(index) {
    let sq = [...square];
    sq[index] = sq[index] === null ? (isXTurn ? "X" : "O") : sq[index];

    setIsXTurn((prevX) => !prevX);
    setSquare(sq);
    setWinner(winningMove(sq));
  }

  function botMove() {}

  function winningMove(square) {
    const winningArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningArr.length; i++) {
      const [j, k, l] = winningArr[i];
      if (square[j] && square[j] === square[k] && square[j] === square[l]) {
        return true;
      }
    }
    for (let i = 0; i < square.length; i++) {
      if (square[i] === null) {
        return null;
      }
    }
    return false;
  }

  function reset() {
    setIsXTurn(true);
    setSquare(new Array(9).fill(null));
    setWinner(null);
    setIsMultiplayer(false);
  }

  function multiplayer() {
    setIsMultiplayer((prev) => !prev);
    setIsXTurn(true);
    setSquare(new Array(9).fill(null));
    setWinner(null);
  }

  function renderSquare(index) {
    return (
      <button
        style={{ height: "100px", width: "100px", fontSize: "22px" }}
        onClick={winner ? () => {} : () => onClickSquare(index)}
      >
        {square[index]}
      </button>
    );
  }
  return (
    <>
      <div>Next Player Turn: {isXTurn ? "Player 1" : "Player 2"}</div>
      <div>
        Winner:{" "}
        {winner !== null
          ? winner
            ? !isXTurn
              ? "Player 1"
              : "Player 2"
            : "Draw"
          : "Not decided"}
      </div>
      {/* <button onClick={multiplayer}> */}
      <button>
        {isMultiplayer
          ? "You are playing with BOT"
          : " Two Players are playing"}
      </button>
      <button onClick={reset}>Reset</button>
      <div style={{ position: "relative", left: "40%", top: "50px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </>
  );
}
