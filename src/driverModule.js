import { Player } from "./classes/Player";
import { generateBoards } from "./helper-Functions/generateBoards";
export function driverModule() {
  const player = new Player("Player");
  const computerPlayer = new Player("Computer");
  generateBoards();
}
