import { computerPlayer } from "../globalSelectors";

export function shipHit(cords) {
  return computerPlayer.gameBoard.board[cords[0]][cords[1]] != "";
}
