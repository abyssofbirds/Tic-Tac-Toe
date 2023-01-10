import { randomRange } from "../random";

class TicTacToeGame {
  /** @type {string[]} */
  state = null;
  /** @type {number} */
  squareSize;

  /**
   * @param {number} squareSize
   * @return {string[]}
   */
  createNewGame(squareSize = 3) {
    this.squareSize = squareSize;
    this.state = new Array(squareSize * squareSize).fill("");
    return this.state;
  }

  makeStep(position) {
    this.__makeUserStep(position);
    this.__makeAIStep();
  }

  __makeUserStep(position) {
    let newState = this.getState();
    if (newState[position - 1] === "") {
      newState[position - 1] = "x";
    }
    this.state = newState;
  }

  /** @return string[] */
  getState() {
    console.log(this.state, "THIS STATE");
    return this.state.concat();
  }

  /** @return boolean */
  isEmptyCellsExists() {
    return this.state.includes("");
  }

  /** @return boolean */
  checkWin() {
    return this.__checkWinBySymbol("x");
  }

  /** @return boolean */
  checkFail() {
    return this.__checkWinBySymbol("o");
  }

  /** @return boolean */
  __checkWinBySymbol(symbol) {
    return (
      this.__isHasWinLinesBySymbol(symbol) ||
      this.__isHasWinDiagonalsBySymbol(symbol)
    );
  }

  /** @return string[] */
  __splitStateByHorizontalLines() {
    let state = this.getState();
    console.log({ state });
    const lines = [];
    for (let i = 0; i < this.state.length; i += this.squareSize) {
      lines.push(state.slice(i, i + this.squareSize));
    }
    return lines;
  }

  /** @return string[] */
  __splitStateByVerticalLines() {
    let state = this.getState();

    // console.log("state", state);
    const columns = [];

    for (let columnIndex = 0; columnIndex < this.squareSize; columnIndex++) {
      const column = [];
      for (let i = 0; i < this.state.length; i += this.squareSize) {
        column.push(state[i + columnIndex]);
      }
      columns.push(column);
    }

    console.log("__splitStateByVerticalLines", columns);
    return columns;
  }

  /** @return string[] */
  __splitStateByDiagonalLines() {
    let state = this.getState();
    const diagonals = [];

    let diagonal = [];
    for (let i = 0; i < this.state.length; i += this.squareSize + 1) {
      diagonal.push(state[i]);
    }
    diagonals.push(diagonal);

    diagonal = [];
    for (let i = 0; i < this.state.length; i += this.squareSize - 1) {
      diagonal.push(state[i]);
    }
    diagonals.push(diagonal);

    return diagonals;
  }

  /**
   * @param {string} symbol
   * @private
   */
  __isHasWinLinesBySymbol(symbol) {
    const winByHorizontal = this.__splitStateByHorizontalLines().find(
      (line) => {
        return line.every((cell) => cell === symbol);
      }
    );
    if (winByHorizontal) return true;
    const winByVertical = this.__splitStateByVerticalLines().find((line) => {
      return line.every((cell) => cell === symbol);
    });
    if (winByVertical) return true;
    return false;
  }

  /**
   * @param {string} symbol
   * @private
   */
  __isHasWinDiagonalsBySymbol(symbol) {
    return this.__splitStateByDiagonalLines().find((line) => {
      return line.every((cell) => cell === symbol);
    });
  }

  /**
   * @private
   */
  __findEmptyCells() {
    const freeSquares = [];
    let nextEmptyCellIndex = this.state.indexOf("");
    while (nextEmptyCellIndex !== -1) {
      freeSquares.push(nextEmptyCellIndex);
      nextEmptyCellIndex = this.state.indexOf("", nextEmptyCellIndex + 1);
    }
    return freeSquares;
  }

  /**
   * @private
   */
  __makeAIStep() {
    const freeSquares = this.__findEmptyCells();
    const randomElement = freeSquares[randomRange(0, freeSquares.length)];
    let state = this.getState();
    state[randomElement] = "o";
    this.state = state;
  }
}

const game = new TicTacToeGame();
export default game;
