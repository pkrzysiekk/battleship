import { manualPlaceButtonControl } from "../eventListeners/manualPlaceButtonControl";
import { randomButtonControl } from "../eventListeners/randomButtonControl";
export function addEventListeners() {
  randomButtonControl();
  manualPlaceButtonControl();
}
