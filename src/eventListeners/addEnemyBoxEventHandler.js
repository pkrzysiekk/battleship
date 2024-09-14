import { computerPlayer } from "../globalSelectors";
import { isShotValid } from "../helper-Functions/isShotValid";
import { shipHit } from "../helper-Functions/shipHit";

export function addEnemyBoxEventHandler(box) {
  box.addEventListener("click", (e) => {
    const data = e.target.getAttribute(`data-number`);
    const title = document.querySelector(".header-span");
    let cordX = parseInt(data.split("-")[0]);
    let cordY = parseInt(data.split("-")[1]);
    const cords = [cordX, cordY];
    if (isShotValid(cords)) {
      box.classList.add("hit");
      box.textContent = "⬤";
      console.log("Hit!");
      computerPlayer.gameBoard.receiveAttack(cords);
      if (shipHit(cords)) {
        box.classList.add("ship-hit");
        title.textContent = "Ship hit!";
      } else {
        title.textContent = "Miss!";
      }
      if (computerPlayer.gameBoard.allSunk()) {
        alert("GAME OVER");
      }
    }
  });
}
