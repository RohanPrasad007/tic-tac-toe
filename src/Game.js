export default class Game {
  constructor() {
    this.turn = "x";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    if (this.turn === "x") {
      this.turn = "o";
    } else {
      this.turn = "x";
    }
  }

  makeMove(i) {
    if (this.board[i] || this.endOfGame()) {
      return;
    }
    this.board[i] = this.turn;
    let winner = this.findWinner();
    console.log(winner);
    if (!winner) {
      this.nextTurn();
    }
  }

  findWinner() {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombination.length; i++) {
      let [a, b, c] = winningCombination[i];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return winningCombination[i];
      }
    }
    return null;
  }

  endOfGame() {
    let winner = this.findWinner();
    if (winner) {
      return true;
    } else {
      return false;
    }
  }
}
