const bingoCanvas = document.querySelector(".bingo-canvas");
const shadedColor = "lightgray";
const BINGO_SQUARES = 25;

function createRandomArray(sourceArray, arrayLength) {
  const shuffled = sourceArray.slice().sort((a, b) => 0.5 - Math.random());
  let randomArray = [];
  for (let idx = 0; idx < arrayLength; idx++) {
    randomArray.push(shuffled[idx]);
  }
  return randomArray;
}

function makeBingoCanvas(phrases, squares) {
  let randomArray = createRandomArray(phrases, squares);

  // 25 for 25 divs (5 * 5) for bingo spaces
  const FREE_SPACE = 13;
  const idxToSpaceNumber = (idx) => idx + 1;
  for (let idx = 0; idx < squares; idx++) {
    let newSpace = document.createElement("div");
    newSpace.addEventListener("click", () => {
      if (newSpace.style.backgroundColor === shadedColor) {
        newSpace.style.backgroundColor = "white";
      } else {
        newSpace.style.backgroundColor = shadedColor;
        checkBingo();
      }
    });
    newSpace.classList.add("bingo-space");
    newSpace.id = "box" + idx;
    bingoCanvas.appendChild(newSpace);
    let insideText = document.createElement("div");
    insideText.classList.add("bingo-text");
    insideText.classList.add("space" + (idx + 1));

    if (idxToSpaceNumber(idx) === FREE_SPACE) {
      let freeSpaceImage = document.createElement("img");
      freeSpaceImage.classList.add("space-image");
      let freeSpaceText = document.createElement("p");
      freeSpaceImage.setAttribute("alt", "G2i Logo");
      freeSpaceImage.setAttribute("src", "./images/g2iLogo.png");
      insideText.appendChild(freeSpaceImage);
      insideText.appendChild(freeSpaceText);
      newSpace.appendChild(insideText);
      freeSpaceText.innerHTML = "Free Space";
    } else {
      insideText.innerHTML = randomArray[idx].text;
      newSpace.appendChild(insideText);
    }
  }
}

function resetBoard() {
  document
    .querySelectorAll(".bingo-space")
    .forEach((space) => bingoCanvas.removeChild(space));
  const winner = document.getElementById("winner");
  if (winner) {
    winner.remove();
  }
  getG2iPhrases()
    .then((g2iPhrases) => makeBingoCanvas(g2iPhrases, BINGO_SQUARES))
    .catch((err) => console.log(err));
}

function gotABingo(sq1, sq2, sq3, sq4, sq5) {
  sq1.style.backgroundColor = "yellow";
  sq2.style.backgroundColor = "yellow";
  sq3.style.backgroundColor = "yellow";
  sq4.style.backgroundColor = "yellow";
  sq5.style.backgroundColor = "yellow";
  const winner = document.createElement("div");
  winner.id = "winner";
  const image = document.createElement("img");
  image.setAttribute("src", "./images/bingo.gif");
  winner.appendChild(image);
  bingoCanvas.appendChild(winner);
}
function checkLines(sq1, sq2, sq3, sq4, sq5) {
  if (
    sq1.style.backgroundColor == shadedColor &&
    sq2.style.backgroundColor == shadedColor &&
    sq3.value == "Free Space" &&
    sq4.style.backgroundColor == shadedColor &&
    sq5.style.backgroundColor == shadedColor
  ) {
    gotABingo(sq1, sq2, sq3, sq4, sq5);
    return;
  } else if (
    sq1.style.backgroundColor == shadedColor &&
    sq2.style.backgroundColor == shadedColor &&
    sq3.style.backgroundColor == shadedColor &&
    sq4.style.backgroundColor == shadedColor &&
    sq5.style.backgroundColor == shadedColor
  ) {
    gotABingo(sq1, sq2, sq3, sq4, sq5);
    return;
  }
}
function checkVerticalBingo() {
  for (var i = 0; i < 5; i++) {
    var sq1 = document.getElementById("box" + i);
    var sq2 = document.getElementById("box" + (i + 5));
    var sq3 = document.getElementById("box" + (i + 10));
    var sq4 = document.getElementById("box" + (i + 15));
    var sq5 = document.getElementById("box" + (i + 20));
    checkLines(sq1, sq2, sq3, sq4, sq5);
  }
}
function checkHorizontalBingo() {
  for (var i = 0; i < 5; i++) {
    switch (i) {
      case 0:
        var sq1 = document.getElementById("box" + i);
        var sq2 = document.getElementById("box" + (i + 1));
        var sq3 = document.getElementById("box" + (i + 2));
        var sq4 = document.getElementById("box" + (i + 3));
        var sq5 = document.getElementById("box" + (i + 4));
        break;
      case 1:
        var sq1 = document.getElementById("box" + (i + 4));
        var sq2 = document.getElementById("box" + (i + 5));
        var sq3 = document.getElementById("box" + (i + 6));
        var sq4 = document.getElementById("box" + (i + 7));
        var sq5 = document.getElementById("box" + (i + 8));
        break;
      case 2:
        var sq1 = document.getElementById("box" + (i + 8));
        var sq2 = document.getElementById("box" + (i + 9));
        var sq3 = document.getElementById("box" + (i + 10));
        var sq4 = document.getElementById("box" + (i + 11));
        var sq5 = document.getElementById("box" + (i + 12));
        break;
      case 3:
        var sq1 = document.getElementById("box" + (i + 12));
        var sq2 = document.getElementById("box" + (i + 13));
        var sq3 = document.getElementById("box" + (i + 14));
        var sq4 = document.getElementById("box" + (i + 15));
        var sq5 = document.getElementById("box" + (i + 16));
        break;
      case 4:
        var sq1 = document.getElementById("box" + (i + 16));
        var sq2 = document.getElementById("box" + (i + 17));
        var sq3 = document.getElementById("box" + (i + 18));
        var sq4 = document.getElementById("box" + (i + 19));
        var sq5 = document.getElementById("box" + (i + 20));
        break;
    }
    checkLines(sq1, sq2, sq3, sq4, sq5);
  }
}
function checkDiagonalBingo() {
  for (var i = 0; i < 2; i++) {
    switch (i) {
      case 0:
        var sq1 = document.getElementById("box" + 0);
        var sq2 = document.getElementById("box" + 6);
        var sq3 = document.getElementById("box" + 12);
        var sq4 = document.getElementById("box" + 18);
        var sq5 = document.getElementById("box" + 24);
        break;
      case 1:
        var sq1 = document.getElementById("box" + 4);
        var sq2 = document.getElementById("box" + 8);
        var sq3 = document.getElementById("box" + 12);
        var sq4 = document.getElementById("box" + 16);
        var sq5 = document.getElementById("box" + 20);
        break;
    }
    checkLines(sq1, sq2, sq3, sq4, sq5);
  }
}
function checkBingo() {
  checkVerticalBingo();
  checkHorizontalBingo();
  checkDiagonalBingo();
}

getG2iPhrases()
  .then((g2iPhrases) => makeBingoCanvas(g2iPhrases, BINGO_SQUARES))
  .catch((err) => console.log(err));
