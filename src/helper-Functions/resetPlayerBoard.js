import { player } from "../globalSelectors";

export function resetPlayerBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      player.gameBoard.board[i][j] = "";
    }
  }
}
