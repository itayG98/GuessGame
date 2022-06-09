'use strict';

const TOPVALUE = Number(20);

let lottery = generateLottery();
let checkbtn = document.querySelector('.check');
let guessInpt = document.querySelector('.guess');
let msg = document.querySelector('.message');
let againbtn = document.querySelector('.again');
let highScore = document.querySelector('.highscore');
highScore.innerHTML = 0;
let scoreText = document.querySelector('.score');
let score = TOPVALUE;
setScore();

document.querySelector('.between').innerHTML = `(Between 1 and ${TOPVALUE})`;
checkbtn.addEventListener('click', CheckClick);
againbtn.addEventListener('click', replayClick);

function CheckClick() {
  if (document.querySelector('body').classList.contains('win')) {
    replayClick();
  } else if (score <= 0) {
    msg.innerHTML = 'You`ve lost Please press replay';
  } else if (guessInpt.value.length !== 0) {
    checkInput();
  } else {
    msg.innerHTML = 'Inavilid input';
    guessInpt.value = '';
  }
}

function replayClick() {
  document.querySelector('body').classList.remove('win');
  msg.innerHTML = 'Start guessing';
  lottery = generateLottery();
  score = TOPVALUE;
  setScore();
  document.querySelector('.number').innerHTML = '?';
}

function win() {
  document.querySelector('body').classList.add('win');
  msg.innerHtml = 'Correct!';
  if (Number(highScore.innerHTML) < Number(scoreText.innerHTML)) {
    highScore.innerHTML = scoreText.innerHTML;
  }
  document.querySelector('.number').innerHTML = lottery;
}

function generateLottery() {
  return Math.trunc(Math.random() * TOPVALUE + 1);
}

function setScore() {
  scoreText.innerHTML = `${score}`;
}

function checkInput() {
  if (Number(guessInpt.value) === lottery && score > 0) {
    win();
  } else if (score > 0) {
    score--;
    setScore();
    if (guessInpt.value > lottery) {
      msg.innerHTML = 'A bit lowerr';
    } else {
      msg.innerHTML = 'A bit higher';
    }
  } else {
    msg.innerHTML = 'You`ve lost';
  }
}
