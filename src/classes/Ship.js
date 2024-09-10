export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }
  hit() {
    this.hits++;
    this.isSunk();
  }
  isSunk() {
    this.hits >= this.length ? (this.sunk = true) : (this.sunk = false);
    return this.sunk;
  }
}
