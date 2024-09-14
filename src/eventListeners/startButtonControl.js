import { computerPlayer, player } from "../globalSelectors";
import { generateComputerBoard } from "../helper-Functions/generateComputerBoard";
import { generateComputerShips } from "../helper-Functions/generateComputerShips";
import { isReady } from "../helper-Functions/isReady";
export let gameStarted = false;
export let playerTurn = false;
export function startButtonControl() {
  const startButton = document.querySelector(".start");
  startButton.addEventListener("click", () => {
    if (isReady()) {
      const buttonsDiv = document.querySelector(".buttons-div");
      buttonsDiv.remove();
      gameStarted = true;
      generateComputerShips();
      generateComputerBoard();
    }
  });
}
