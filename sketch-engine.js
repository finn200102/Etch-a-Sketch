function buttonClick() {
  const sketchBoard = document.querySelector("#sketch-board");
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "blue";
    let percent = (1 / 18) * 100;
    div.style.width = percent.toString() + "%";
    div.style.border = "2px solid black";

    div.classList.add("pixel");
    sketchBoard.appendChild(div);
  }
}

const btn = document.querySelector("#button");
btn.addEventListener("click", () => {
  buttonClick();
});
