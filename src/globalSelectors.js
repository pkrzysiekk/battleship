import { Player } from "./classes/Player";
export const playerDiv = document.querySelector(".left");
export const computerDiv = document.querySelector(".right");
export const player = new Player("Player");
export const computerPlayer = new Player("Computer");
