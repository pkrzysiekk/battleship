import { GameBoard } from "./GameBoard";
export class Player {
  constructor(name) {
    this.name = name;
    this.gameBoard = new GameBoard();
  }
}
