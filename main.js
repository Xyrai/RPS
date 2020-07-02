const choices = ["rock", "paper", "scissors"];
let drawCounter = 0;

function selectedWeapon(choice) {
  const randomBotSelection = choices[Math.floor(Math.random() *  choices.length)];

  if (choice == randomBotSelection) {
    drawCounter++;
    console.log(drawCounter);
    return setDrawText();
  }

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
  document.getElementById('results-text').innerHTML  = `It's a draw! (${drawCounter})`;
}

function resetTextColors() {
  document.getElementById('bot-score').style.color = '#FFF';
  document.getElementById('player-score').style.color = '#FFF';
}

// Rock wins vs Scissors
// Paper wins vs Rock
// Scissors win vs Paper
