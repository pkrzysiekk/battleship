export function addEnemyBoxEventHandler(box) {
  box.addEventListener("click", () => {
    box.classList.add("hit");
    box.textContent = "⬤";
  });
}
