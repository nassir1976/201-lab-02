'use strict';


var username = prompt('What is your name');
console.log('Hi ' + username);

var countryLocation = prompt('Am I orginally from Ethiopia ?');
if(countryLocation ==='yes'|| countryLocation ==='y' ) {

  console.log('yes!  I am orginally from Ethiopia');
  alert('yes! I am orginally from Ethiopia');
}
var like = prompt('Do I like American football?');
if(like ==='yes'|| like ==='y') {

  console.log('yes! I do like American foot ball');
  alert('yes! I do like American foot ball') ;

}

var favorite = prompt('do you think software developer is my favorite field ? ');
if(favorite === 'yes' || favorite === 'y') {
  console.log('yes! It is my dream  profession  . so fare I would love to be building software instead of road and buliding ');
  alert('yes! It is my dream  profession . so fare I would love to be building software instead of road and buliding ');
}
var fun = prompt('Am I Arsenal soccer team fun ? ');
if(fun === 'yes' || fun === 'y') {
  console.log('yes! I am Arsenal soccer team fun  since i was  age 20 , I never miss a single arsenal match ');
  alert('yes! I am Arsenal soccer team fun  since i was age 20, I never miss a single arsenal match ');

}
alert('Well done! , come back  next time to my webpage ' + username );

//console.log(won + ' it was a nice game and the team deserve that title!');

//alert('It\'s Nice to meet you ' + username + ' . ' + countryLocation + ' is nice country . ' + like + ' but I like soccer more  sometimes I do not mined to watch Amirican football too ! ' + won + ' it was a nice superbowl game and the team deserve that title!') ;
