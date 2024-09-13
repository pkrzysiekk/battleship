import { playerDiv } from "../globalSelectors";

export function clearPlayerBoard() {
  const playerBoard = document.querySelector(".player-board");
  while (playerBoard.firstChild) {
    playerBoard.firstChild.remove();
  }
}
