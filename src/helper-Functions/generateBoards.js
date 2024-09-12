export function generateBoards() {
  const playerBoardDiv = document.createElement("div");
  const computerBoardDiv = document.createElement("div");

  playerBoardDiv.classList.add("player-board");
  computerBoardDiv.classList.add("computer-board");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("data-number", `${i}-${j}`);
      playerBoardDiv.appendChild(box);
      computerBoardDiv.appendChild(box);
    }
  }
}
