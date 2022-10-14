'use strict';

// Selecting elements with id
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

let scores,currentScore,playing,activePlayer;
const init = function () {
 activePlayer = 0;
 scores = [0, 0]

diceEl.classList.add('hidden')
   playing = true;
  currentScore = 0;
  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0
  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
}

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = currentScore
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}


btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1

    //2 Display dice

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      current0El.textContent = currentScore; //CHANGE LATER
    } else {
      //Switch to next player
      switchPlayer()

    }
  }
})

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    //scores[1]= scores[1] +currentScore

    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer]
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      document.classList.add('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {

      switchPlayer()
    }
  }

  // 2.Check if player's score is higher
})

btnNew.addEventListener('click',init)