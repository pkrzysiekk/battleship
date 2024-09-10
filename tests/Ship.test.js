import { Ship } from "../src/classes/Ship";

describe("test Ship class", () => {
  it("being hit", () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hits).toEqual(1);
  });
});
