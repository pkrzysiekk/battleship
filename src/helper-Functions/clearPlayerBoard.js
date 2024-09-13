import { playerDiv } from "../globalSelectors";

export function clearPlayerBoard() {
  while (playerDiv.firstChild()) {}
}
