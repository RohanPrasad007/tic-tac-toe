import "./App.css";
import Game from "./Game";
import React, { useState, useRef } from "react";

function App() {
  const [game, setGame] = useState(new Game());
  const [board, setBorad] = useState(game.board);
  const palyerX = useRef();
  const palyerO = useRef();
  const tile = new Array(9).fill(null);
  tile[0] = useRef();
  tile[1] = useRef();
  tile[2] = useRef();
  tile[3] = useRef();
  tile[4] = useRef();
  tile[5] = useRef();
  tile[6] = useRef();
  tile[7] = useRef();
  tile[8] = useRef();
  const updateBorad = () => {
    updateTurn();
    let newBoard = game.board;
    setBorad([...newBoard]);
    showWinner();
  };

  const onTileClick = (i) => {
    game.makeMove(i);
    updateBorad();
  };

  const restart = () => {
    resetWinner();
    let newGame = new Game();
    setGame(newGame);
    setBorad(newGame.board);
  };

  const updateTurn = () => {
    palyerX.current.classList.remove("active-x");
    palyerO.current.classList.remove("active-o");
    if (game.turn === "x") {
      palyerX.current.classList.add("active-x");
    } else {
      palyerO.current.classList.add("active-o");
    }
  };

  const showWinner = () => {
    let winner = game.findWinner();
    if (winner != null) {
      for (let i = 0; i < winner.length; i++) {
        tile[winner[i]].current.classList.add("winner");
      }
    }
  };

  const resetWinner = () => {
    let winner = game.findWinner();
    if (winner != null) {
      for (let i = 0; i < winner.length; i++) {
        tile[winner[i]].current.classList.remove("winner");
      }
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="right">
          <div className="title">
            <h1>
              Let's paly <br />
              the Tic-Tac-Toe Game!
            </h1>
          </div>
          <div className="restart">
            <button onClick={() => restart()}>Start a new game</button>
          </div>
        </div>
        <div className="left">
          <div className="game">
            <div className="header">
              <div className="player-x active-x" ref={palyerX}>
                <span>Player X</span>
              </div>
              <div className="player-o " ref={palyerO}>
                <span>Player O</span>
              </div>
            </div>
            <div className="board">
              <div
                className="board-tile"
                onClick={() => onTileClick(0)}
                ref={tile[0]}
              >
                {board[0]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(1)}
                ref={tile[1]}
              >
                {board[1]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(2)}
                ref={tile[2]}
              >
                {board[2]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(3)}
                ref={tile[3]}
              >
                {board[3]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(4)}
                ref={tile[4]}
              >
                {board[4]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(5)}
                ref={tile[5]}
              >
                {board[5]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(6)}
                ref={tile[6]}
              >
                {board[6]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(7)}
                ref={tile[7]}
              >
                {board[7]}
              </div>
              <div
                className="board-tile"
                onClick={() => onTileClick(8)}
                ref={tile[8]}
              >
                {board[8]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
