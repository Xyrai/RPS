const choices = ["rock", "paper", "scissors"];

function selectedWeapon(choice) {
  const randomBotSelection = choices[Math.floor(Math.random() *  choices.length)];

  if (choice == randomBotSelection) {
    return setDrawText();
  }

  if (choice == "rock" && randomBotSelection == "scissors") {
    setWinnerStats();
  } else if (choice == "paper" && randomBotSelection == "rock") {
    setWinnerStats();
  } else if (choice == "scissors" && randomBotSelection == "paper") {
    setWinnerStats();
  } else {
    setLoserStats();
  }

  if (parseInt(document.getElementById('player-score').innerHTML) == parseInt(document.getElementById('bot-score').innerHTML)) {
    resetTextColors();
    return;
  }

  if (parseInt(document.getElementById('player-score').innerHTML) > parseInt(document.getElementById('bot-score').innerHTML)) {
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
  document.getElementById('results-text').innerHTML  = "It's a draw!";
}

function resetTextColors() {
  document.getElementById('bot-score').style.color = '#FFF';
  document.getElementById('player-score').style.color = '#FFF';
}

// Rock wins vs Scissors
// Paper wins vs Rock
// Scissors win vs Paper
