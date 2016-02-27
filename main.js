'use strict';

var $num, randNum, winNum, winArray = [], checkWinArray = [], reRoll = 3;

$(document).ready(init);

function init() {

  $('#holder').on('click', '.star', starClick);
  $('#restart').click(restart);
  $('#confirm').click(submit);
  $('#reroll').click(reroll);
  $('.num').click(numClick);
}

function submit() {
  console.log('submit');
  createStars();
  //empty holder
}

function reroll() {
  createStars();
  reRoll = reRoll--;
  console.log('reroll');

}

function randNumStars() {

}

function createStars() {
  console.log('create');
  randNum = Math.ceil(Math.random() * 8);
  console.log("randNum", randNum);
  for(var i = 0; i < randNum; i++) {
    var $star = $('<div>').addClass('fa fa-star star fa-5x');
    $('#holder').append($star);
  }

  // numberArray = numberArray.concat();
  // var randomArray = [];
}

function starClick() {
  console.log('starClick');

}
function numClick() {
  console.log('numClick');
  var $num = ($(this).text());
  console.log($num);

}

function checkForRoundWin() {
  console.log('round');

}

function checkForGameWin() {
  console.log('game');
}

function restart() {
  console.log('restart');
  document.location.href = "";
}
