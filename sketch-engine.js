function buttonClick(numberPerSide = 16) {
  const sketchBoard = document.querySelector("#sketch-board");
  for (let i = 0; i < numberPerSide ** 2; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.style.opacity = "1";
    let percent = (1 / numberPerSide) * 100;
    div.style.width = percent.toString() + "%";
    // div.style.border = "2px solid black";
    div.addEventListener("mouseover", () => {
      //div.style.backgroundColor = "black";
      div.style.opacity = (Number(div.style.opacity) - 0.1).toString();
    });

    div.classList.add("pixel");
    sketchBoard.appendChild(div);
  }
}

function showPopup() {
  let number = Number(prompt("Please enter number:"));
  if (!Number.isInteger(number)) {
    return false;
  }
  if (number > 100) {
    // Set the number to 100 if too big
    number = 100;
  }
  if (number < 1) {
    number = 1;
  }
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
