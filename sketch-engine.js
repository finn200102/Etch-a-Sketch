function buttonClick(numberPerSide = 16) {
  const sketchBoard = document.querySelector("#sketch-board");
  for (let i = 0; i < numberPerSide ** 2; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "blue";
    let percent = (1 / numberPerSide) * 100;
    div.style.width = percent.toString() + "%";
    // div.style.border = "2px solid black";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "green";
    });

    div.classList.add("pixel");
    sketchBoard.appendChild(div);
  }
}

function showPopup() {
  let number = prompt("Please enter number:");
  clearField();
  buttonClick((numberPerSide = number));
}

function clearField() {
  const sketchBoard = document.querySelector("#sketch-board");
  while (sketchBoard.firstChild) {
    sketchBoard.removeChild(sketchBoard.firstChild);
  }
}

const btn = document.querySelector("#button");
btn.addEventListener("click", () => {
  buttonClick();
});

const btnClear = document.querySelector("#button-clear");
btnClear.addEventListener("click", () => {
  clearField();
});

const btnChange = document.querySelector("#button-change");
btnChange.addEventListener("click", () => {
  showPopup();
});
