'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🤷‍♀️🤷‍♀️🤷‍♀️ correct Number!';

document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));

*/

// Create Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Assign Score To Player.

let score = document.querySelector('.score').textContent;
let highScore = 0;

// Add Game logic and Manage Events.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When There Is No Input

  if (!guess) {
    displayMessage('💀 No Number!');

    //When Player Wins!!!
  } else if (guess === secretNumber) {
    displayMessage('👍 correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //Style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the Guess is too High
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤦‍♂️ Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤦‍♂️ Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When the Guess is too Low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤦‍♂️ Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Use Again Btn TO Reset The Game.

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;

  score = 20;
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');

  //Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
