
const choices = ["rock", "paper", "scissors"];
function selectedWeapon(choice) {

  const randomBotSelection = choices[Math.floor(Math.random() *  choices.length)];
  console.log(randomBotSelection);

  if (choice == randomBotSelection) {
    console.log('its a tie');
    return
  }

  if (choice == "rock" && randomBotSelection == "scissors") {
    document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
    return console.log('you win lol');
  } else if (choice == "paper" && randomBotSelection == "rock") {
    document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
    return console.log('you win lol');
  } else if (choice == "scissors" && randomBotSelection == "paper") {
    document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) + 1;
    return console.log('you win lol');
  } else {
    document.getElementById('bot-score').innerHTML = parseInt(document.getElementById('bot-score').innerHTML) + 1;
    console.log('you lose lol');
  }
}

// Rock wins vs Scissors
// Paper wins vs Rock
// Scissors win vs Paper
