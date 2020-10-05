'use strict';


var username = prompt('What is your name');
console.log('Hello ' + username);
alert('Welcome to my webpage ! ' + username );

var countryLocation = prompt('Am I orginally from Ethiopia ?').toLowerCase();
if(countryLocation ==='yes'|| countryLocation ==='y' ) {

  console.log('yes!  I am orginally from Ethiopia');
  alert('yes! I am orginally from Ethiopia');
} else {alert('you get wrong');}

var like = prompt('Do I like American football?').toLowerCase();
if(like ==='no'|| like ==='n') {

  console.log('no ! I do not like American foot ball');
  alert('no! I do not like American foot ball');

} else {alert('you get wrong');}

var favorite = prompt('do you think software developer is my favorite field ? ').toLowerCase();
if(favorite === 'yes' || favorite === 'y') {
  console.log('yes! It is my dream  profession  . so fare I would love to be building software instead of road and buliding ');
  alert('yes! It is my dream  profession . so fare I would love to be building software instead of road and buliding ');
} else {alert('you get wrong');}
var fan = prompt('Am I Arsenal soccer team fan ? ').toLowerCase();
if(fan === 'yes' || fan === 'y') {
  console.log('yes! I am Arsenal soccer team fan  since i was  age 20 , I never miss a single arsenal match ');
  alert('yes! I am Arsenal soccer team fun  since i was age 20, I never miss a single arsenal match ' );
} else {alert('you get wrong');}

var have = prompt('Do I have a GMC yukon XL car? ').toLowerCase();
if(have === 'yes' || have === 'y') {
  console.log('yes! I have 2019 GMC Yukon XL ');
  alert('yes! I have 2019 GMC Yukon XL ' );
} else {alert('you get wrong');}

alert('Well done! , come back  next time to my webpage ' + username );

// Question 6
const correctAnswer =  false;

for (var i = 0; i < 4; i++)
{
  const guess = prompt("Guess how many of my top 10 places I have visited so far");

  if (guess <= 0) {
        alert('It is above zero!');
      }else if (guess >= 1 && guess < 3) {
        alert('it is too low !');
      } else if (guess >=3 && guess <= 4) {
        alert('it is amost closer!'); 
      } else if (guess > 5 && guess <=7) {
        alert('it is amost closer!');
      } else if (guess > 7 && guess <=10) {
        alert('it is too high!');
      } else if (guess >= 5 && guess <= 5) {
        alert('Great , thats right.');
        correctAnswer = true;
        break;

      }
}
 if (correctAnswer == false){alert("You run out of attempts. The right answer is 5.")}

// question 7


for (var i = 0; i < 6; i++)
{
  
  var colorArray = ["white", "black", "yellow"];
  var colorQuestion = prompt("can you guess my top three colors stored in arrays ?");
  var lowerCasedAnswer = colorQuestion.toLowerCase();
  
  if (lowerCasedAnswer === colorArray[0]) {
    alert('you right!');
    break;
  }else if (lowerCasedAnswer === colorArray[1]) {
    alert('you right!');
    break;
  }else if (lowerCasedAnswer === colorArray[2]) {
    alert('you right!');
    break;
  }else{
    alert('wrong try again');
  
  }
  
}     
 
