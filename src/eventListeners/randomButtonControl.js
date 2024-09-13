import { player } from "../globalSelectors";
import { getRandomCords } from "../helper-Functions/getRandomCords";
import { resetPlayerBoard } from "../helper-Functions/resetPlayerBoard";

export function randomButtonControl() {
  const randomButton = document.querySelector(".random");
  randomButton.addEventListener("click", () => {
    resetPlayerBoard();
    let i = 5;
    while (i > 0) {
      const placeShip = player.gameBoard.placeShip(i, getRandomCords());
      if (placeShip) {
        i--;
      }
    }
  });
}
