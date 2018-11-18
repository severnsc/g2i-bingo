const buttons = document.querySelectorAll("input");
const bingoCanvas = document.querySelector(".bingo-canvas");
const allDivs = bingoCanvas.querySelectorAll("div");
let arrayBtnResponse = {
  josh: "n",
  dustin: "n",
  other: "n"
};
const joshPhrases = {
  phrases: [
    "BIG BOSS",
    "Isn't that cool?",
    "5 minute break",
    "Breathin' room",
    "It's in the training kit",
    "border: 1px solid red;",
    "Isn't that awesome guys?",
    "Aha!",
    "Extra cheese",
    "Slap that there",
    "Guys, this is SO POWERFUL.",
    "Secret sauce",
    "(Josh is wearing a Lambda hat)",
    "(Any given spelling error)", // Do you think that we should put this in here?
    "Isn't that crazy?",
    "Mind-blowing (or any variation thereof)",
    "Designers spent 20 hours...",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder"
  ]
};
const dustinPhrases = {}; // To be updated when Dustin is teaching us

function newBingoCanvas() {
  // 25 for 25 divs (5 * 5) for bingo spaces
  for (i = 0; i < 25; i++) {
    let newSpace = document.createElement("div");
    newSpace.classList.add("bingo-space");
    bingoCanvas.appendChild(newSpace);

    let insideText = document.createElement("p");
    insideText.classList.add("bingo-text");
    insideText.classList.add("space" + (i + 1));
    newSpace.appendChild(insideText);

    document.getElementsByClassName("space" + (i + 1)).innerHTML = function() {
      if ((arrayBtnResponse.josh = "y")) {
        // Stopped working here for the evening
      }
    };
  }
}

function joshBingo() {
  if (arrayBtnResponse.josh === "y") return;

  arrayBtnResponse.josh = "y";
  arrayBtnResponse.dustin = "n";
  arrayBtnResponse.other = "n";
  newBingoCanvas();
}

function dustinBingo() {
  alert("That feature will be added once Dustin starts teaching.");
}

function otherBingo() {
  alert("That feature will be added once we get more instructors.");
}

function addEvent() {
  buttons.forEach(input => {
    input.addEventListener("click", () => {
      if (input.value === "Josh") {
        joshBingo();
      }
      if (input.value === "Dustin") {
        dustinBingo();
      }
      if (input.value === "Other") {
        otherBingo();
      }
    });
  });
}

addEvent();
joshBingo();
