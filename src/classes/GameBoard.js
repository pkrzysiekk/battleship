export class GameBoard {
  constructor() {
    this.board = this.InitializeBoard();
  }
  InitializeBoard(w = 10, h = 10, val = "") {
    var arr = [];
    for (let i = 0; i < h; i++) {
      arr[i] = [];
      for (let j = 0; j < w; j++) {
        arr[i][j] = val;
      }
    }
    return arr;
  }
}
