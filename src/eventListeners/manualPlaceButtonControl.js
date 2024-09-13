import { player, playerDiv } from "../globalSelectors";
import { clearPlayerBoard } from "../helper-Functions/clearPlayerBoard";
import { generatePlayerBoard } from "../helper-Functions/generatePlayerBoard";
import { resetPlayerBoard } from "../helper-Functions/resetPlayerBoard";
export let shipsLeftToPlace = 5;
export function manualPlaceButtonControl() {
  const manualButton = document.querySelector(".manual");
  const buttonsDiv = document.querySelector(".buttons-div");
  const titleInfo = document.querySelector(".header-span");
  manualButton.addEventListener("click", () => {
    const existingInput = document.querySelector(".manual-input");
    resetPlayerBoard();
    generatePlayerBoard();
    if (!existingInput) {
      const input = document.createElement("input");
      input.classList.add("manual-input");
      input.type = "text";
      buttonsDiv.appendChild(input);
      titleInfo.textContent = "Place ship 5x1";
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          if (shipsLeftToPlace > 0) {
            let posX = parseInt(input.value.split(",")[0]);
            let posY = parseInt(input.value.split(",")[1]);
            let pos = [posX, posY];
            const placeShip = player.gameBoard.placeShip(shipsLeftToPlace, pos);
            if (placeShip) {
              shipsLeftToPlace--;
              titleInfo.textContent = `Place ships ${shipsLeftToPlace}x1`;
              generatePlayerBoard();
            }
            if (placeShip == 0) {
              titleInfo.textContent = "Ready!";
            }
          }
        }
      });
    }
  });
}
