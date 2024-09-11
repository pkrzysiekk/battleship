import { canBePlaced } from "../canBePlaced";
import { Ship } from "./Ship";

export class GameBoard {
  constructor() {
    this.board = this.initializeBoard();
  }
  initializeBoard(w = 10, h = 10, val = "") {
    var arr = [];
    for (let i = 0; i < h; i++) {
      arr[i] = [];
      for (let j = 0; j < w; j++) {
        arr[i][j] = val;
      }
    }
    return arr;
  }
  placeShip(shipLength, cords) {
    const shipToPlace = new Ship(shipLength);
    if (canBePlaced(shipLength, cords)) {
      for (let i = 0; i < shipLength; i++) {
        this.board[cords[0]][cords[1] + i] = shipToPlace;
      }
    }
    //this.board[cords[0]][cords[1]] = shipToPlace;
  }
}
