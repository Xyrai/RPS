const choices = ["rock", "paper", "scissors"];
let drawCounter = 0;

function selectedWeapon(choice) {
  const randomBotSelection = choices[Math.floor(Math.random() *  choices.length)];

  if (choice == randomBotSelection) {
    drawCounter++;
    return setDrawText();
  }

  // Switch statements... I know, I know.
  if (choice == "rock" && randomBotSelection == "scissors") {
    drawCounter = 0;
    setWinnerStats();
  } else if (choice == "paper" && randomBotSelection == "rock") {
    drawCounter = 0;
    setWinnerStats();
  } else if (choice == "scissors" && randomBotSelection == "paper") {
    drawCounter = 0;
    setWinnerStats();
  } else {
    drawCounter = 0;
    setLoserStats();
  }

  let playerScore = parseInt(document.getElementById('player-score').innerHTML);
  let botScore = parseInt(document.getElementById('bot-score').innerHTML);

  if (playerScore == botScore) {
    return resetTextColors();
  }

  if (playerScore > botScore) {
    document.getElementById('player-score').style.color = '#979E34';
  } else {
    document.getElementById('bot-score').style.color = '#979E34';
  }
}

function setWinnerStats() {
  document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
  document.getElementById('results-text').innerHTML = "You win!";
}

function setLoserStats() {
  document.getElementById('bot-score').innerHTML = parseInt(document.getElementById('bot-score').innerHTML) + 1;
  document.getElementById('results-text').innerHTML = "You lose!";
}

function setDrawText() {
  document.getElementById('results-text').innerHTML  = `It's a draw! (${drawCounter})`;
}

function resetTextColors() {
  document.getElementById('bot-score').style.color = '#FFF';
  document.getElementById('player-score').style.color = '#FFF';
}
