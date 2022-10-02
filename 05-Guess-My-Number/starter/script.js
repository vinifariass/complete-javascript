'use strict';
// read the textContext property of this element
const secretNumber = Math.trunc(Math.random() * 20) + 1
Document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.guess').value = 23
document.querySelector('.guess').value
//adiciona um evento 
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('message').textContent = 'No number|';

  } else if (guess == secretNumber) {
    document.querySelector('message').textContent = 'Correnct Number| 🎉';

  } else if (guess > secretNumber) {
    if (score > 1) {

      Document.querySelector('.message').textContent = '📈Too high'
      document.querySelector('.score').textContent = score
      score--
    } else {
      Document.querySelector('.message').textContent = 'You lost the game 🧨'
      document.querySelector('.score').textContent = 0
    }
  } else if (guess < secretNumber) {

    if (score > 1) {

      Document.querySelector('.message').textContent = '📉Too low'
      document.querySelector('.score').textContent = score
      score--
    } else {
      Document.querySelector('.message').textContent = 'You lost the game 🧨'
      document.querySelector('.score').textContent = 0
    }

  }
})