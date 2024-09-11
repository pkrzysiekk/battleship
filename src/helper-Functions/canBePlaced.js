export function canBePlaced(shipLength, cords) {
  return shipLength + cords[0] <= 10 && shipLength + cords[1] <= 10;
}
