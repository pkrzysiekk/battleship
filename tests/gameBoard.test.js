import { GameBoard } from "../src/classes/GameBoard";
import { Ship } from "../src/classes/Ship";

describe("test GameBoard class", () => {
  describe("test placeShip func", () => {
    it(" can be placed", () => {
      const board = new GameBoard();
      const obj = new Ship(4);
      board.placeShip(4, [2, 2]);
      expect(board.board[2][2]).toEqual(obj);
      expect(board.board[2][3]).toEqual(obj);
      expect(board.board[2][4]).toEqual(obj);
      expect(board.board[2][5]).toEqual(obj);
    });
    it("checks if ship can be placed", () => {
      const board = new GameBoard();
      const obj = new Ship(4);
      board.placeShip(4, [9, 9]);
      expect(board.board[9][9]).toEqual("");
    });
  });
  describe("test receiveHit", () => {
    it("can be hit", () => {
      const board = new GameBoard();
      const obj = new Ship(1);
      board.placeShip(1, [2, 2]);
      board.receiveAttack([2, 2]);
      expect(board.hits.length).toEqual(1);
      expect(board.hits[0]).toEqual([2, 2]);
      expect(board.missedHits.length).toEqual(0);
    });
  });
  describe("test allSunk func", () => {
    it("reports correctly with all ships down", () => {
      const board = new GameBoard();
      const obj = new Ship(1);
      board.placeShip(1, [2, 2]);
      board.receiveAttack([2, 2]);
      expect(board.allSunk()).toEqual(true);
    });
    it("reports correctly with ships still on board", () => {
      const board = new GameBoard();
      const obj = new Ship(1);
      board.placeShip(1, [2, 2]);
      expect(board.allSunk()).toEqual(false);
    });
  });
});
