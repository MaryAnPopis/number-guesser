// Games values

let min = 1,
  max = 10,
  winnigNum = getRandomNum(min, max),
  guessesLeft = 3;

const gameWrapper = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assing min and max
minNum.textContent = min;
maxNum.textContent = max;

gameWrapper.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number ${min} and ${max}`, "red");
    guessInput.style.borderColor = "red";
  }

  if (guess === winnigNum) {
    gameOver(true, ` ${winnigNum} is correct, You WIN!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over, YOU LOST. The correct number was ${winnigNum}`
      );
    } else {
      guessInput.style.borderColor = "red";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");

      guessInput.value = "";
    }
  }
});

function gameOver(won, msg) {
  let color;
  won == true ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
