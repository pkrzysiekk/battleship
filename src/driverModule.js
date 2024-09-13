import { Player } from "./classes/Player";
import { addEventListeners } from "./helper-Functions/addEventListeners";
import { generateComputerBoard } from "./helper-Functions/generateComputerBoard";
import { generateControls } from "./helper-Functions/generateControls";
import { generatePlayerBoard } from "./helper-Functions/generatePlayerBoard";
import { placePlayerShips } from "./helper-Functions/placePlayerShips";
export function driverModule() {
  //  placePlayerShips();
  generatePlayerBoard();
  generateComputerBoard();
  generateControls();
  addEventListeners();
}
