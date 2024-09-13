import { player } from "../globalSelectors";
import { playerDiv } from "../globalSelectors";
import { clearPlayerBoard } from "./clearPlayerBoard";
import { resetPlayerBoard } from "./resetPlayerBoard";

export function generatePlayerBoard() {
  const existingBoard = document.querySelector(".player-board");
  const existingInfo = document.querySelector(".info");
  if (existingBoard) {
    playerDiv.removeChild(existingBoard);
    playerDiv.removeChild(existingInfo);
  }

  const playerBoardDiv = document.createElement("div");
  const playerInfo = document.createElement("p");
  playerBoardDiv.classList.add("player-board");
  for (let i = 0; i <= 10; i++) {
    const span = document.createElement("span");
    if (i > 0) {
      span.textContent = `${i - 1}`;
    }
    playerBoardDiv.appendChild(span);
  }

  for (let i = 0; i < 10; i++) {
    const rowHeader = document.createElement("span");
    rowHeader.textContent = `${i}`;
    playerBoardDiv.appendChild(rowHeader);

    for (let j = 0; j < 10; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("data-number", `${i}-${j}`);
      if (player.gameBoard.board[i][j] != "") {
        box.classList.add("box-ship");
      }
      playerBoardDiv.appendChild(box);
    }
  }
  playerInfo.textContent = "Your board";
  playerInfo.classList.add("info");
  playerDiv.prepend(playerInfo);
  playerDiv.prepend(playerBoardDiv);
}
