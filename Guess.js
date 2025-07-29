const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

document.getElementById("submitBtn").onclick = function () {
  const guessField = document.getElementById("guessInput");
  const resultText = document.getElementById("result");

  let guess = Number(guessField.value);

  if (isNaN(guess)) {
    resultText.textContent = " Please enter a valid number.";
    return;
  }

  if (guess < minNum || guess > maxNum) {
    resultText.textContent = " Enter a number between 1 and 100.";
    return;
  }

  attempts++;

  if (guess < answer) {
    resultText.textContent = " TOO LOW! Try again.";
  } else if (guess > answer) {
    resultText.textContent = " TOO HIGH! Try again.";
  } else {
    resultText.textContent = ` CORRECT! It was ${answer}. You guessed it in ${attempts} attempts.`;
  }
};
