const buttons = document.querySelectorAll("input");
const bingoCanvas = document.querySelectorAll(".bingo-canvas");
const allDivs = bingoCanvas.querySelectorAll("div");
const day = function() {
  // To be updated
  // Will be used to varify if it's Sunday so that the banjo emoji will be placed somewhere in the grid
};

let arrayBtnResponse = {
  josh: "y",
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
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
};

const dustinPhrases = {};

// Add in draw canvas function once created
function joshBingo() {
  arrayBtnResponse.josh = "y";
  arrayBtnResponse.dustin = "n";
  arrayBtnResponse.other = "n";
}

// To be updated as class goes on
function dustinBingo() {
  return alert("That feature will be added once Dustin starts teaching.");
}

// To be updated as class goes on
function otherBingo() {
  return alert("That feature will be added once we get more instructors.");
}

function newBingoCanvas() {
  // to be updated with creation of new canvas
}

buttons.forEach(input => {
  input.addEventListener("click", () => {
    if (input.value === "josh") {
      joshBingo();
    } else if (input.value === "dustin") {
      dustinBingo();
    } else if (input.value === "other") {
      otherBingo();
    } else {
      console.log("Something went wrong.");
    }
  });
});
