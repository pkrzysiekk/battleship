import { Player } from "./classes/Player";
import { generateBoards } from "./helper-Functions/generateBoards";
import { placePlayerShips } from "./helper-Functions/placePlayerShips";
export function driverModule() {
  placePlayerShips();
  generateBoards();
}
