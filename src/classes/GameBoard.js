import { canBePlaced } from "../helper-Functions/canBePlaced";
import { isNewHit } from "../helper-Functions/isNewHit";
import { Ship } from "./Ship";

export class GameBoard {
  constructor() {
    this.board = this.initializeBoard();
    this.missedHits = [];
    this.hits = [];
    this.ships = [];
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
  noAdjacentShips(shipLength, cords, pos) {
    if (pos === "h") {
      for (let i = 0; i < shipLength; i++) {
        let x = cords[0];
        let y = cords[1] + i;

        if (
          (y + 1 < this.board.length && this.board[x][y + 1] !== "") ||
          (y - 1 >= 0 && this.board[x][y - 1] !== "") ||
          (x + 1 < this.board.length && this.board[x + 1][y] !== "") ||
          (x - 1 >= 0 && this.board[x - 1][y] !== "")
        ) {
          return false;
        }
      }
    } else if (pos === "v") {
      for (let i = 0; i < shipLength; i++) {
        let x = cords[0] + i;
        let y = cords[1];

        if (
          (x + 1 < this.board.length && this.board[x + 1][y] !== "") ||
          (x - 1 >= 0 && this.board[x - 1][y] !== "") ||
          (y + 1 < this.board[0].length && this.board[x][y + 1] !== "") ||
          (y - 1 >= 0 && this.board[x][y - 1] !== "")
        ) {
          return false;
        }
      }
    }
    return true;
  }

  placeShip(shipLength, cords, pos = "h") {
    const shipToPlace = new Ship(shipLength);
    if (
      canBePlaced(shipLength, cords) &&
      this.noAdjacentShips(shipLength, cords, pos)
    ) {
      if (pos == "h")
        for (let i = 0; i < shipLength; i++) {
          this.board[cords[0]][cords[1] + i] = shipToPlace;
        }
      else {
        for (let i = 0; i < shipLength; i++) {
          this.board[cords[0] + i][cords[1]] = shipToPlace;
        }
      }
      this.ships.push(shipToPlace);
      return true;
    }
    return false;
  }
  receiveAttack(cord) {
    if (isNewHit(cord, this.hits, this.missedHits)) {
      if (this.board[(cord[0], cord[1])] != "") {
        const ship = this.board[cord[0]][cord[1]];
        ship.hit();
        this.hits.push(cord);
      } else {
        this.missedHits.push(cord);
      }
    }
  }
  allSunk() {
    return !this.ships.some((ship) => ship.sunk == false);
  }
}
