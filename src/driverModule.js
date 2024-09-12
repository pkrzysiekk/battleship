import { Player } from "./classes/Player";
export function driverModule() {
  const player = new Player("Player");
  const computerPlayer = new Player("Computer");
  generateBoards();
}
