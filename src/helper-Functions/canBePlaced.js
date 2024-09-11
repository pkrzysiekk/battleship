export function canBePlaced(shipLength, cords) {
  return (
    shipLength + cords[0] <= 10 &&
    shipLength + cords[1] <= 10 &&
    cords[0] >= 0 &&
    cords[1] >= 0
  );
}
