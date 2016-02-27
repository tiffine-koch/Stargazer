'use strict';

var $num, randNum, winNum, winArray = [], checkWinArray = [], reRoll = 0, gameplay = true;

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
  var count = reRoll++;
  console.log('reRoll', count);
  if(count === 2) {
    console.log('game over');
  } else {
    console.log('reroll');
    createStars();
  }
}

function gameOver() {

}

function createStars() {
  console.log('create');
  randNum = Math.ceil(Math.random() * 8);
  console.log("randNum", randNum);

  for(var i = 0; i < randNum; i++) {
    var $star = $('<div>').addClass('fa fa-star star fa-5x');
    $('#holder').append($star);
    // $('#displayCount').text(randNum + " stars").addClass('count');
  }

  // numberArray = numberArray.concat();
  // var randomArray = [];
}

// $something.empty();

function starClick() {
  console.log('starClick');
  //animate css
}

function numClick() {
  console.log('numClick');
  var $this = $(this);
  var $num = $this.text();
  console.log($num);

  var wasSelected = $this.hasClass('selected');
  if(!wasSelected) {
    $this.addClass('selected');
  }
}

function checkForRoundWin() {
  console.log('round');
  //createStars();

}

function checkForGameWin() {
  //if winner remove selected
  console.log('game');
}

function restart() {
  console.log('restart');
  createStars();
  reRoll = 3;
  //remove selected
  // document.location.href = "";
}
