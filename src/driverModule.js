import { Player } from "./classes/Player";
import { addEventListeners } from "./helper-Functions/addEventListeners";
import { generateBoards } from "./helper-Functions/generateBoards";
import { generateControls } from "./helper-Functions/generateControls";
import { placePlayerShips } from "./helper-Functions/placePlayerShips";
export function driverModule() {
  //  placePlayerShips();
  generateBoards();
  generateControls();
  addEventListeners();
}
