'use strict';

var scoreTracker = 0;

var username = prompt('What is your name');
alert('Welcome to my webpage ! ' + username);

function questionOne() {
  var countryLocation = prompt('Am I orginally from Ethiopia ?').toLowerCase();
  if (countryLocation === 'yes' || countryLocation === 'y') {

    alert('yes! I am orginally from Ethiopia');
    scoreTracker++;

  } else {
    alert('you get wrong');
  }
}

function questionTwo() {
  var like = prompt('Do I like American football?').toLowerCase();
  if (like === 'no' || like === 'n') {

    alert('no! I do not like American foot ball');
    scoreTracker++;

  } else {
    alert('you get wrong');
  }
}
function questionThree() {
  var favorite = prompt('do you think software developer is my favorite field ? ').toLowerCase();
  if (favorite === 'yes' || favorite === 'y') {
    alert('yes! It is my dream  profession . so fare I would love to be building software instead of road and buliding ');
    scoreTracker++;
  } else { alert('you get wrong'); }

}
function questionFour() {
  var fan = prompt('Am I Arsenal soccer team fan ? ').toLowerCase();
  if (fan === 'yes' || fan === 'y') {
   
    alert('yes! I am Arsenal soccer team fun  since i was age 20, I never miss a single arsenal match ');
    scoreTracker++;
  } else { alert('you get wrong'); }

}
function questionFive() {
  var have = prompt('Do I have a GMC yukon XL car? ').toLowerCase();
  if (have === 'yes' || have === 'y') {
    alert('yes! I have 2019 GMC Yukon XL ');
    scoreTracker++;
  } else { alert('you get wrong'); }

}


function questionSix() {
  var correctAnswer = false;

  for (var i = 0; i < 4; i++) {
    var guess = prompt("Guess how many of my top 10 places I have visited so far");

    if (guess <= 0) {
      alert('It is above zero!');
    } else if (guess <= 4) {
      alert('it is too low !');
    } else if (guess >= 6) {
      alert('it is too high!');
    } else if (guess >= 5 && guess <= 5) {
      alert('Great , thats right.');
      scoreTracker++;
      correctAnswer = true;
      break;

    }
  }
  if (correctAnswer == false) { alert("You run out of attempts. The right answer is 5.") }

}
function questionSeven() {
  var favoriteColor = ['black', 'white', 'yellow', 'orange', 'gray'];
  var colorQuestion = prompt("can you guess my favorite colors?").toLowerCase();

  var attemptsNumber = 6;
  var answerCorrect = false;
  while (attemptsNumber > 0 && !answerCorrect) {
    attemptsNumber--;
    for (var i = 0; i < favoriteColor.length; i++) {
      if (colorQuestion === favoriteColor[i]) {
        answerCorrect = true;
        alert('that is one of my favorite color!');
        scoreTracker++;
      }
    }
    if (attemptsNumber > 0 && !answerCorrect) {
      colorQuestion = prompt('try again thats not my favorite Color');
    }

  }

  if (attemptsNumber === 0 && !answerCorrect) {
    alert('sorry you loss your number of attempts!  my favorite colors are black white yellow orange and gray ');
  }

}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert('You got ' + scoreTracker + " out of 7 questions. THANK YOU FOR VISITING MY WEBPAGE ");

