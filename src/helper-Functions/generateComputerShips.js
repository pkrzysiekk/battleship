import { computerPlayer } from "../globalSelectors";
import { getRandomCords } from "./getRandomCords";

export function generateComputerShips() {
  let i = 5;
  while (i > 0) {
    const placeShip = computerPlayer.gameBoard.placeShip(i, getRandomCords());
    if (placeShip) {
      i--;
    }
  }
}
