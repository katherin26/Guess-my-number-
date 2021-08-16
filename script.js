"use strict";

let score = 20;
let highscore = 0;
let secretNumber;
let setSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
setSecretNumber();

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displaySecretNumber = function (number, width) {
  let numberElement = document.querySelector(".number");
  numberElement.textContent = number;
  numberElement.style.width = width;
};

//CHECK BUTTON--------------------------------------------------------//
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("NO NUMBER!!!");
  } else if (guess === secretNumber) {
    displayMessage("YOU WIN THIS TIME!!");
    displaySecretNumber(secretNumber, "30rem");
    document.querySelector("body").style.backgroundColor = "#F3C6A5";
    //emoji remove
    document.querySelector(`#winner`).classList.remove("hidden");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "TOO HIGH" : "TOO LOW");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("YOU LOST THE GAME !!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//-------AGAIN BOTTOM-----------------------------------------//
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  setSecretNumber();
  displayMessage("START GUESSING...");
  document.querySelector(".score").textContent = score;
  displaySecretNumber("?", "15rem");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#eee3dd";
  //emoji add hidden
  document.querySelector("#winner").classList.add("hidden");
});
