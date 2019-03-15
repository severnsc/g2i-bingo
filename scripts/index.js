const buttons = document.querySelectorAll("input");
const bingoCanvas = document.querySelector(".bingo-canvas");
const allDivs = bingoCanvas.querySelectorAll("div");
const shadedColor = "lightgray";
let arrayBtnResponse = {
  josh: "n",
  dustin: "n",
  luis: "n"
};
let randomArray = [];
const luisPhrases = [  
  { text: 'Luis has his camera turned on' },
{ text: 'Luis chuckles at Slack' },
{ text: 'Luis asks for a volunteer to screenshare' },
{ text: 'Troubleshoots a student\'s bug onscreen' },
{ text: 'Asks for a volunteer to tell him what code to write' },
{ text: 'Drops a code snippet in Slack' },
{ text: 'Drops a resource in Slack' },
{ text: '"Don\'t worry, be happy!"' },
{ text: 'Any given LOTR reference' },
{ text: 'We see code in Spanish' },
{ text: 'Luis reads a Slack comment aloud' },
{ text: 'Bad panda' },
{ text: 'Luis tells us a secret'}
]; 
const dustinPhrases = [
  { text: '"K?"' },
  { text: '"Typing is hard."' },
  { text: '(Hums) "Do, do do..."' },
  { text: "(Makes Harry Potter reference)" },
  { text: "(Makes Marvel reference)" },
  { text: "(Makes Lord of the Rings reference)" },
  { text: '"(num) points to the Hogwarts house of your choice."' },
  { text: '(Plays "It\'s working!" Star Wars clip)' },
  { text: '"Woo-hoo!!!"' },
  { text: '"Hooray!"' },
  { text: '"Neato!"' },
  { text: "(References Gryffindor)" },
  { text: '"We\'re so good at life!"' },
  { text: '"Curses"' },
  { text: "(Plays pre-lecture music)" },
  { text: "(Keeps annotating after intending to stop)" },
  { text: '"Yay!"' },
  { text: '"This is gonna blow your minds."' },
  { text: "(Any given spelling error)" },
  { text: "(Drops CodeSandbox in comments section)" },
  { text: "(References official React documentation)" },
  { text: "(Wearing Star Wars Shirt)" },
  { text: "(App breaks)" },
  { text: '"Foobar/Banana"' }
];
const joshPhrases = [
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
  { text: "(Drops Codepen in comments section)" },
  { text: "(Drops a resource link in Slack channel)" },
  { text: '"Welcome back"' },
  { text: '"Fingers on keyboards"' },
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
  } else if ((arrayBtnResponse.luis = "y")) {
    for (let luisIndex = 0; luisIndex < luisPhrases.length; luisIndex++) {
      randomArray.push(luisPhrases[luisIndex]);
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
  arrayBtnResponse.luis = "n";
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
  arrayBtnResponse.luis = "n";
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
dustinBingo(); // Builds a bingo board for Dustin as default - Can be changed when cohort moves on
