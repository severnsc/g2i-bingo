const buttons = document.querySelectorAll("input");
const bingoCanvas = document.querySelector(".bingo-canvas");
const allDivs = bingoCanvas.querySelectorAll("div");
let arrayBtnResponse = {
  josh: "n",
  dustin: "n",
  other: "n"
};
let randomArray = [];
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

function createRandomArray() {
  randomArray = [];
  for (let joshIndex = 0; joshIndex < joshPhrases.length; joshIndex++) {
    randomArray.push(joshPhrases[joshIndex]);
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
      if (space.style.backgroundColor === "lightgray") {
        space.style.backgroundColor = "white";
      } else {
        space.style.backgroundColor = "lightgray";
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
    bingoCanvas.appendChild(newSpace);

    let insideText = document.createElement("div");
    insideText.classList.add("bingo-text");
    insideText.classList.add("space" + (spaceNum + 1));

    if (spaceNum + 1 === 13) {
      let cheeseImage = document.createElement("img");
      cheeseImage.setAttribute("src", "./images/cheese-wedge.png");
      cheeseImage.setAttribute("alt", "Cheese wedge emoji");
      cheeseImage.classList.add("cheese-image");

      insideText.appendChild(cheeseImage);
      newSpace.appendChild(insideText);

      // insideText.innerHTML = "Free Space";
    } else {
      insideText.innerHTML = getBingoText();
      newSpace.appendChild(insideText);
    }
  }
  turnSpaceGray();
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
function listenNavBtns() {
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
listenNavBtns(); // Adds even listeners to buttons
joshBingo(); // Builds a bingo board for josh as default - Can be changed when cohort moves on
