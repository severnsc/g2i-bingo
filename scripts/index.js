const buttons = document.querySelectorAll("input");
const bingoCanvas = document.querySelector(".bingo-canvas");
const allDivs = bingoCanvas.querySelectorAll("div");
let arrayBtnResponse = {
  josh: "n",
  dustin: "n",
  other: "n",
  shuffleCount: 0
};
let dustinPhrases = []; // To be updated when Dustin is our teacher
let otherPhrases = []; // To be updated when we get other teachers
let joshPhrases = [
  { text: "BIG BOSS", selected: "n" },
  { text: "Isn't that cool?", selected: "n" },
  { text: "5 minute break", selected: "n" },
  { text: "Breathin' room", selected: "n" },
  { text: "It's in the training kit", selected: "n" },
  { text: "border: 1px solid red;", selected: "n" },
  { text: "Isn't that awesome guys?", selected: "n" },
  { text: "Aha!", selected: "n" },
  { text: "Extra cheese", selected: "n" },
  { text: "Slap that there", selected: "n" },
  { text: "Guys, this is SO POWERFUL.", selected: "n" },
  { text: "Secret sauce", selected: "n" },
  { text: "(Josh is wearing a Lambda hat)", selected: "n" },
  { text: "(Any given spelling error)", selected: "n" }, // Do you think that we should put this in here?
  { text: "Isn't that crazy?", selected: "n" },
  { text: "Mind-blowing (or any variation thereof)", selected: "n" },
  { text: "Designers spent 20 hours...", selected: "n" },
  { text: "Placeholder", selected: "n" },
  { text: "Placeholder", selected: "n" },
  { text: "Placeholder", selected: "n" },
  { text: "Placeholder", selected: "n" },
  { text: "Placeholder", selected: "n" },
  { text: "Placeholder", selected: "n" },
  { text: "Placeholder", selected: "n" },
  { text: "Placeholder", selected: "n" }
];

function getBingoText() {
  arrayBtnResponse.shuffleNum = 0;
  let num = Math.floor(Math.random() * 24) + 1 - arrayBtnResponse.shuffleCount;
  if (num <= 0) {
    num = 24;
  }

  if (arrayBtnResponse.josh === "y") {
    //================================== Stopped here last evening
  } else if (arrayBtnResponse.dustin === "y") {
  } else if (arrayBtnResponse.other === "y") {
  }
}

function spaceListeners() {
  const spaces = document.querySelectorAll(".bingo-space");
  spaces.forEach(space => {
    space.addEventListener("click", () => {
      if (space.style.backgroundColor === "gray") {
        space.style.backgroundColor = "white";
      } else {
        space.style.backgroundColor = "gray";
        console.log("Dude.");
      }
    });
  });
}

function makeBingoCanvas() {
  // 25 for 25 divs (5 * 5) for bingo spaces
  for (i = 0; i < 25; i++) {
    let newSpace = document.createElement("div");
    newSpace.classList.add("bingo-space");
    bingoCanvas.appendChild(newSpace);

    let insideText = document.createElement("p");
    insideText.classList.add("bingo-text");
    insideText.classList.add("space" + (i + 1));
    newSpace.appendChild(insideText);

    document.getElementsByClassName(
      "space" + (i + 1)
    ).innerHTML = getBingoText();
  }

  spaceListeners();
}

function joshBingo() {
  if (arrayBtnResponse.josh === "y") return;

  arrayBtnResponse.josh = "y";
  arrayBtnResponse.dustin = "n";
  arrayBtnResponse.other = "n";
  makeBingoCanvas();
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

addEvent(); // Adds even listeners to buttons
joshBingo(); // Builds a bingo board for josh as default - Can be changed when cohort moves on
