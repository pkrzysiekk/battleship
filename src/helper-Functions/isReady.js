import { player } from "../globalSelectors";

export function isReady() {
  let area = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (player.gameBoard.board[i][j] != "") area++;
    }
  }
  return area == 15;
}
