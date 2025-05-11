const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset-btn");
const stat = document.querySelector("#status");

let turnX = true; //

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
function checkWinner() {
  for (pattern of winningPattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        for (let box of boxes) {
          box.disabled = true;
        }
        stat.innerText = `${val1} Won The Game`;
        return; // Exit function after a win
      }
    }
  }
  let isDraw = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });
  if (isDraw) {
    stat.innerText = "It's a Draw!";
  }
}

reset.addEventListener("click", () => {
  turnX = true;
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    stat.innerText = ``;
  }
});
