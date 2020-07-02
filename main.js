
const choices = ["rock", "paper", "scissors"];
function selectedWeapon(choice) {

  const randomBotSelection = choices[Math.floor(Math.random() *  choices.length)];
  console.log(randomBotSelection);

  if (choice == randomBotSelection) {
    return document.getElementById('results-text').innerHTML = "It's a Tie!";
  }

  if (choice == "rock" && randomBotSelection == "scissors") {
    document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
    document.getElementById('results-text').innerHTML = "You Win!";
  } else if (choice == "paper" && randomBotSelection == "rock") {
    document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
    document.getElementById('results-text').innerHTML = "You Win!";
  } else if (choice == "scissors" && randomBotSelection == "paper") {
    document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
    document.getElementById('results-text').innerHTML = "You Win!";
  } else {
    document.getElementById('bot-score').innerHTML = parseInt(document.getElementById('bot-score').innerHTML) + 1;
    document.getElementById('results-text').innerHTML = "You Lose!";
  }

  if (parseInt(document.getElementById('player-score').innerHTML) == parseInt(document.getElementById('bot-score').innerHTML)) {
    document.getElementById('bot-score').style.color = '#FFF';
    document.getElementById('player-score').style.color = '#FFF';
    return;
  }

  if (parseInt(document.getElementById('player-score').innerHTML) > parseInt(document.getElementById('bot-score').innerHTML)) {
    document.getElementById('player-score').style.color = '#979E34';
  } else {
    document.getElementById('bot-score').style.color = '#979E34';
  }
}

// Rock wins vs Scissors
// Paper wins vs Rock
// Scissors win vs Paper
