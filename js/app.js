'use strict';


var username = prompt('What is your name');
console.log('welcome to my webpage ' + username);
alert('Welcome to my webpage ! ' + username );

var countryLocation = prompt('Am I orginally from Ethiopia ?').toLowerCase();
if(countryLocation ==='yes'|| countryLocation ==='y' ) {

  console.log('yes!  I am orginally from Ethiopia');
  alert('yes! I am orginally from Ethiopia');
} else {alert('you get wrong');}

var like = prompt('Am I like American football?').toLowerCase();
if(like ==='yes'|| like ==='y') {

  console.log('yes! I do like American foot ball');
  alert('yes! I do like American foot ball');

} else {alert('you get wrong');}

var favorite = prompt('do you think software developer is my favorite field ? ').toLowerCase();
if(favorite === 'yes' || favorite === 'y') {
  console.log('yes! It is my dream  profession  . so fare I would love to be building software instead of road and buliding ');
  alert('yes! It is my dream  profession . so fare I would love to be building software instead of road and buliding ');
} else {alert('you get wrong');}
var fan = prompt('Am I Arsenal soccer team fan ? ').toLowerCase();
if(fan === 'yes' || fan === 'y') {
  console.log('yes! I am Arsenal soccer team fun  since i was  age 20 , I never miss a single arsenal match ');
  alert('yes! I am Arsenal soccer team fun  since i was age 20, I never miss a single arsenal match ' );
} else {alert('you get wrong');}

var have = prompt('Do I have a GMC yukon XLcar? ').toLowerCase();
if(have === 'yes' || have === 'y') {
  console.log('yes! I have 2019 GMC Yukon XL ');
  alert('yes! I have 2019 GMC Yukon XL' );
} else {alert('you get wrong');}

alert('Well done! , come back  next time to my webpage ' + username );

//console.log(won + ' it was a nice game and the team deserve that title!');

//alert('It\'s Nice to meet you ' + username + ' . ' + countryLocation + ' is nice country . ' + like + ' but I like soccer more  sometimes I do not mined to watch Amirican football too ! ' + won + ' it was a nice superbowl game and the team deserve that title!') ;
