import { computerPlayer } from "../globalSelectors";

export function isShotValid(cords) {
  return (
    !computerPlayer.gameBoard.hits.some(
      (hit) => hit[0] === cords[0] && hit[1] === cords[1]
    ) &&
    !computerPlayer.gameBoard.missedHits.some(
      (miss) => miss[0] === cords[0] && miss[1] === cords[1]
    )
  );
}
