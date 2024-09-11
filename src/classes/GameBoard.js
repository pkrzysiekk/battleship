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
  placeShip(shipLength, cords) {
    const shipToPlace = new Ship(shipLength);
    if (canBePlaced(shipLength, cords)) {
      for (let i = 0; i < shipLength; i++) {
        this.board[cords[0]][cords[1] + i] = shipToPlace;
      }
      this.ships.push(shipToPlace);
    }
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
