const buttons = document.querySelectorAll("input");
const bingoCanvas = document.querySelector(".bingo-canvas");
const allDivs = bingoCanvas.querySelectorAll("div");
const shadedColor = "lightgray";
let arrayBtnResponse = {
  josh: "n",
  dustin: "n",
  other: "n"
};
let randomArray = [];
let dustinPhrases = [
  { text: '"K?"' },
  { text: '"Typing is hard."' },
  { text: '(Hums) "Do, do do..."' },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" },
  { text: "Placeholder" }
];
let otherPhrases = []; // To be updated when we get other teachers
let joshPhrases = [
  { text: '"Big Boss"' },
  { text: '"Isn\'t that cool?"' },
  { text: '"5 minute break"' },
  { text: '"Breathin\' room"' },
  { text: '"It\'s in the training kit"' },
  { text: "border: 1px solid (any-color); " },
  { text: '"Isn\'t that awesome guys?"' },
  { text: '"Aha!"' },
  { text: '"Extra cheese"' },
  { text: '"Slap that there"' },
  { text: '"Guys, this is SO POWERFUL."' },
  { text: '"Secret sauce"' },
  { text: "(Josh is wearing a Lambda hat)" },
  { text: "(Any given spelling error)" },
  { text: '"Isn\'t that crazy?"' },
  { text: '"Mind-blowing" (or any variation thereof)' },
  { text: '"Designers spent 20 hours..."' },
  { text: "TRBL" },
  { text: '"Show me in the comments section..."' },
  { text: '"Let\'s take a poll..."' },
  { text: '"Alright, welcome FSW16 to (topic), day (number)."' },
  { text: '"Start recording!"' },
  { text: "(Drops codepen in comments section)" },
  { text: "(Drops a resource link in Slack channel)" },
  { text: '"Welcome back"' },
  { text: '"Fingers on keyboards"' }, // New addition - Christie, let me know what you think of everything below (and including) this line
  { text: '"Zeroeth"' },
  { text: '(Googles "MDN" + something)' },
  { text: '"I\'ll disown you"' },
  { text: 'Any reference to "the next developer"' },
  { text: '"Pro tip!"' },
  { text: '"In the wild"' },
  { text: '"Banana"' },
  { text: "Draw tool is used" },
  { text: '"Under the hood"' },
  { text: "(Dad cough)" },
  { text: '"Mind yer loggers!"' },
  { text: '"Whoa."' }
];
function createRandomArray() {
  const day = new Date().getDay();
  randomArray = [];
  if (arrayBtnResponse.josh === "y") {
    if (day === 5) {
      randomArray.push({ text: "" });
    }
  }
  if (arrayBtnResponse.josh === "y") {
    for (let joshIndex = 0; joshIndex < joshPhrases.length; joshIndex++) {
      randomArray.push(joshPhrases[joshIndex]);
    }
  } else if (arrayBtnResponse.dustin === "y") {
    for (
      let dustinIndex = 0;
      dustinIndex < dustinPhrases.length;
      dustinIndex++
    ) {
      randomArray.push(dustinPhrases[dustinIndex]);
    }
  }
}
function getBingoText() {
  if (randomArray.length > 0) {
    let index = Math.floor(Math.random() * randomArray.length);
    let spaceText = randomArray[index].text;
    randomArray.splice(index, 1);
    return spaceText;
  }
}
function turnSpaceGray() {
  const spaces = document.querySelectorAll(".bingo-space");
  spaces.forEach(space => {
    space.addEventListener("click", () => {
      if (space.style.backgroundColor === shadedColor) {
        space.style.backgroundColor = "white";
      } else {
        space.style.backgroundColor = shadedColor;
        checkBingo();
      }
    });
  });
}
function makeBingoCanvas() {
  createRandomArray();
  // 25 for 25 divs (5 * 5) for bingo spaces
  for (let spaceNum = 0; spaceNum < 25; spaceNum++) {
    let newSpace = document.createElement("div");
    newSpace.classList.add("bingo-space");
    newSpace.id = "box" + spaceNum;
    bingoCanvas.appendChild(newSpace);
    let insideText = document.createElement("div");
    insideText.classList.add("bingo-text");
    insideText.classList.add("space" + (spaceNum + 1));
    if (spaceNum + 1 === 13) {
      let freeSpaceImage = document.createElement("img");
      freeSpaceImage.classList.add("space-image");
      let freeSpaceText = document.createElement("p");
      if (arrayBtnResponse.josh === "y") {
        freeSpaceImage.setAttribute("alt", "Cheese wedge emoji");
        freeSpaceImage.setAttribute("src", "./images/cheese-wedge.png");
      } else if (arrayBtnResponse.dustin === "y") {
        freeSpaceImage.setAttribute("alt", "Hogwarts Crest");
        freeSpaceImage.setAttribute("src", "./images/hogwarts-crest.png");
      }
      insideText.appendChild(freeSpaceImage);
      insideText.appendChild(freeSpaceText);
      newSpace.appendChild(insideText);
      freeSpaceText.innerHTML = "Free Space";
    } else {
      insideText.innerHTML = getBingoText();
      if (insideText.innerHTML === "") {
        insideText.innerHTML === " ";
        let banjoImage = document.createElement("img");
        banjoImage.setAttribute("src", "./images/banjo.png");
        banjoImage.setAttribute("alt", "Banjo emoji");
        banjoImage.classList.add("banjo-image");
        insideText.appendChild(banjoImage);
      }
      newSpace.appendChild(insideText);
    }
  }
  turnSpaceGray();
}
function resetBoard() {
  randomArray = [];
  document
    .querySelectorAll(".bingo-space")
    .forEach(space => bingoCanvas.removeChild(space));
}
function joshBingo() {
  if (arrayBtnResponse.josh === "y") {
    alert("The game is already set up for Josh.");
    return;
  }
  resetBoard();
  arrayBtnResponse.josh = "y";
  arrayBtnResponse.dustin = "n";
  arrayBtnResponse.other = "n";
  makeBingoCanvas();
}
function dustinBingo() {
  if (arrayBtnResponse.dustin === "y") {
    alert("The game is already set up for Dustin.");
    return;
  }
  resetBoard();
  arrayBtnResponse.josh = "n";
  arrayBtnResponse.dustin = "y";
  arrayBtnResponse.other = "n";
  makeBingoCanvas();
}
function luisBingo() {
  alert("That feature will be added once Luis starts teaching.");
}
(function listenNavBtns() {
  buttons.forEach(input => {
    input.addEventListener("click", () => {
      if (input.value === "Josh") {
        joshBingo();
      }
      if (input.value === "Dustin") {
        dustinBingo();
      }
      if (input.value === "Luis") {
        luisBingo();
      }
    });
  });
})();
function gotABingo(sq1, sq2, sq3, sq4, sq5) {
  sq1.style.backgroundColor = "yellow";
  sq2.style.backgroundColor = "yellow";
  sq3.style.backgroundColor = "yellow";
  sq4.style.backgroundColor = "yellow";
  sq5.style.backgroundColor = "yellow";
  alert("BINGO! Nice one.");
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
  j = 0;
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
joshBingo(); // Builds a bingo board for Dustin as default - Can be changed when cohort moves on
