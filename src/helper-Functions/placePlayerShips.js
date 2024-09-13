import { player } from "../globalSelectors";

export function placePlayerShips() {
  player.gameBoard.placeShip(4, [2, 2]);
}
