'use strict';

const TOPVALUE = Number(20);

let lottery;
let checkbtn = document.querySelector('.check');
let guessInpt = document.querySelector('.guess');
let msg = document.querySelector('.message');
let againbtn = document.querySelector('.again');

let highScore = 0;
let highScoreText = document.querySelector('.highscore');
highScoreText.innerHTML = highScore;
let scoreText = document.querySelector('.score');
let score = TOPVALUE;

const setScore = () => {
  scoreText.innerHTML = `${score}`;
};
const generateLottery = () => {
  lottery = Math.trunc(Math.random() * TOPVALUE + 1);
};
const displayMessege = messege => {
  msg.innerHTML = messege;
};

generateLottery();
setScore();

document.querySelector('.between').innerHTML = `(Between 1 and ${TOPVALUE})`;
checkbtn.addEventListener('click', CheckClick);
againbtn.addEventListener('click', replayClick);

function CheckClick() {
  if (document.querySelector('body').classList.contains('win')) {
    replayClick();
  } else if (score <= 0) {
    displayMessege('You`ve lost Please press replay');
  } else if (guessInpt.value.length !== 0) {
    checkInput();
  } else {
    console.log(guessInpt.value.length); /*if not a number */
    displayMessege('Inavilid input');
    guessInpt.value = '';
  }
}

function replayClick() {
  document.querySelector('body').classList.remove('win');
  msg.innerHTML = 'Start guessing';
  score = TOPVALUE;
  setScore();
  generateLottery();
  document.querySelector('.number').innerHTML = '?';
}

function win() {
  document.querySelector('body').classList.add('win');
  displayMessege('Correct!');
  if (highScore < Number(scoreText.innerHTML)) {
    highScore = Number(scoreText.innerHTML);
    highScoreText.innerHTML = highScore;
  }
  document.querySelector('.number').innerHTML = lottery;
}

function checkInput() {
  if (Number(guessInpt.value) === lottery && score > 0) {
    win();
  } else if (score > 0) {
    score--;
    setScore();
    if (guessInpt.value > lottery) {
      displayMessege('A bit lowerr');
    } else {
      displayMessege('A bit higher');
    }
  } else {
    displayMessege('You`ve lost');
  }
}
