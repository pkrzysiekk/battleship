export function getRandomCords() {
  let cords = [];
  cords[0] = Math.floor(Math.random() * 10);
  cords[1] = Math.floor(Math.random() * 10);
  return cords;
}
