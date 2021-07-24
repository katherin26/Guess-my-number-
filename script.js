let secretNumber = Math.trunc(Math.random() * 20) + 1;

//-------------SCORE----------//
let score = 20;
//----------HIGHSCORE----------//
let highscore = 0;
//--------CHECK BUTTON------------//
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //-------------WHEN THERE IS NOT INPUT-----------------------//
  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER !!";

    //----------------WHEN PLAYER WINS---------------------------//
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "YOU WIN THIS TIME!!";
    document.querySelector(".number").textContent = secretNumber;
    //-------------CHANGE THE COLOR WHEN YOU WINS!---------------//
    document.querySelector("body").style.backgroundColor = "#602347";
    document.querySelector(".number").style.width = "30rem";
  }
  //--------------------HIGHSCORE-------------------------------//
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;

    //------------WHEN GUESS IS TOO HIGH OR TOO LOW------------------------//
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "TOO HIGH!!" : "TOO LOW!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THIS TIME!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
//------- ---------------AGAIN BOTTOM-----------------------------------------//
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
