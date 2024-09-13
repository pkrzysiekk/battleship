import { playerDiv } from "../globalSelectors";

export function generateControls() {
  const buttonsDiv = document.createElement("div");
  const randomButton = document.createElement("button");
  const manualButton = document.createElement("button");
  const startButton = document.createElement("button");

  randomButton.textContent = "Random";
  randomButton.classList.add("random");
  manualButton.textContent = "Place manually";
  manualButton.classList.add("manual");
  startButton.textContent = "Start!";
  startButton.classList.add("start");
  buttonsDiv.classList.add("buttons-div");

  buttonsDiv.appendChild(randomButton);
  buttonsDiv.appendChild(manualButton);
  buttonsDiv.appendChild(startButton);
  playerDiv.appendChild(buttonsDiv);
}
