'use strict';
// read the textContext property of this element
const secretNumber = Math.trunc(Math.random() * 20) + 1
let highscore = 0;

Document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.guess').value = 23
document.querySelector('.guess').value
//adiciona um evento 
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  //When there is no input
  if (!guess) {
    document.querySelector('message').textContent = 'No number|';
    //When player wins
  } else if (guess == secretNumber) {
    document.querySelector('message').textContent = 'Correnct Number| 🎉';

    document.querySelector('body').style.backgroundColor('#60b347')

    document.querySelector('.number').style.width = '30rem'

if(score>highscore){
  highscore = score;
}

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {

      Document.querySelector('.message').textContent = '📈Too high'
      document.querySelector('.score').textContent = score
      score--
    } else {
      Document.querySelector('.message').textContent = 'You lost the game 🧨'
      document.querySelector('.score').textContent = 0
    }
    //When guess is too low

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

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.message').textContent = 'Start guessing...'
  Document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0
  document.querySelector('.score').value = 20
  document.querySelector('body').style.backgroundColor("#222")
  docyment.querySelector('.number').style.width = '15rem'


})