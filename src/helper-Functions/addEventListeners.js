import { manualPlaceButtonControl } from "../eventListeners/manualPlaceButtonControl";
import { randomButtonControl } from "../eventListeners/randomButtonControl";
import { startButtonControl } from "../eventListeners/startButtonControl";
export function addEventListeners() {
  randomButtonControl();
  manualPlaceButtonControl();
  startButtonControl();
}
