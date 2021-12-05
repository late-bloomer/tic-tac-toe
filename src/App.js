import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default Game;
