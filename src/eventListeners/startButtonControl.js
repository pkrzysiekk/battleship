import { isReady } from "../helper-Functions/isReady";

export function startButtonControl() {
  const startButton = document.querySelector(".start");
  startButton.addEventListener("click", () => {
    if (isReady()) {
      const buttonsDiv = document.querySelector(".buttons-div");
      buttonsDiv.remove();
    }
  });
}
