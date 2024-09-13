import { computerDiv } from "../globalSelectors";
export function generateComputerBoard() {
  const computerBoardDiv = document.createElement("div");

  const computerInfo = document.createElement("p");

  computerBoardDiv.classList.add("computer-board");

  for (let i = 0; i <= 10; i++) {
    const span = document.createElement("span");
    if (i > 0) {
      span.textContent = `${i - 1}`;
    }
    computerBoardDiv.appendChild(span);
  }

  for (let i = 0; i < 10; i++) {
    const rowHeader = document.createElement("span");
    rowHeader.textContent = `${i}`;
    computerBoardDiv.appendChild(rowHeader);

    for (let j = 0; j < 10; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("data-number", `${i}-${j}`);
      computerBoardDiv.appendChild(box);
    }
  }
  computerInfo.textContent = "Computer board";
  computerDiv.appendChild(computerBoardDiv);
  computerDiv.appendChild(computerInfo);
}
