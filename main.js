'use strict';

var $num, randNum, winNum, winArray = [], checkWinArray = [], reRoll = 0;

$(document).ready(init);

function init() {

  $('#holder').on('click', '.star', starClick);
  $('#restart').click(restart);
  $('#confirm').click(confirm);
  $('#reroll').click(reroll);
  $('.num').click(numClick);
  createStars();
}

function reroll() {
  createStars();
  var count = reRoll++;
  if(count === 2) {
    var $lose = $('<p>You Lose! Click Restart to Play Again</p>').addClass('alert');
    $('#message').append($lose);
  } else {
    console.log('reroll');
    createStars();
  }
}

function createStars() {
  $('section').empty(); //start by emptying stars
  $('p').empty(); //start by emptying stars
  console.log('create');
  randNum = Math.ceil(Math.random() * 8); //generate random # of stars
  console.log("randNum", randNum);

  for(var i = 0; i < randNum; i++) {
    var $star = $('<div>').addClass('fa fa-star star fa-5x'); //create stars
    $('#holder').append($star); //append to holder
  }
}

function starClick() {
  console.log('starClick');
  //animate css
}

function numClick() {
  console.log('numClick');
  var $this = $(this);
  var $num = $this.text();
  console.log($num);
  var $this = $(this);
  $this.toggleClass('selected');
}

function restart() {
  $('section').empty(); //start by emptying stars
  $('p').empty(); //start by emptying stars

  console.log('restart');
  reRoll = 3;
  //remove selected
  $('.selected').removeClass('selected');
  $('.notInPlay').removeClass('notInPlay');
  createStars();
}
function confirm() {
  console.log('round');
  var numStars = randNum;
  var $selected = $('.selected')
  var clickNum = 0;
  $selected.each(function() {
    var nextClick = $(this).text();
    console.log("nextClick", nextClick);
    return clickNum += parseInt(nextClick);
    console.log("clickNum", clickNum);
  });

  if(numStars === clickNum){
    $selected.off('click').removeClass('selected').addClass('notInPlay');
    $('#message').empty();
    var $win = $('<p>You Win This Round!</p>').addClass('alert'); //create msg
    $('#message').append($win); //append msg
    createStars(); //next round
  }
  else {
    $('.selected').removeClass('selected');
    $('#message').empty();
    var $lose = $('<p>Guess Again!</p>').addClass('alert');
    $('#message').append($lose);
  }

  if($('.notInPlay').length === 9) {
    $('#message').empty();
    var $winGame = $('<p>You Win Game! Click Restart to Play Again</p>').addClass('alert');
    $('#message').append($winGame);
  }
}
