// 'use strict';


// var username = prompt('What is your name');
// console.log('Hello ' + username);
// alert('Welcome to my webpage ! ' + username );

// var countryLocation = prompt('Am I orginally from Ethiopia ?').toLowerCase();
// if(countryLocation ==='yes'|| countryLocation ==='y' ) {

//   console.log('yes!  I am orginally from Ethiopia');
//   alert('yes! I am orginally from Ethiopia');
// } else {alert('you get wrong');}

// var like = prompt('Do I like American football?').toLowerCase();
// if(like ==='no'|| like ==='n') {

//   console.log('yes! I do like American foot ball');
//   alert('no! I do not like American foot ball');

// } else {alert('you get wrong');}

// var favorite = prompt('do you think software developer is my favorite field ? ').toLowerCase();
// if(favorite === 'yes' || favorite === 'y') {
//   console.log('yes! It is my dream  profession  . so fare I would love to be building software instead of road and buliding ');
//   alert('yes! It is my dream  profession . so fare I would love to be building software instead of road and buliding ');
// } else {alert('you get wrong');}
// var fan = prompt('Am I Arsenal soccer team fan ? ').toLowerCase();
// if(fan === 'yes' || fan === 'y') {
//   console.log('yes! I am Arsenal soccer team fan  since i was  age 20 , I never miss a single arsenal match ');
//   alert('yes! I am Arsenal soccer team fun  since i was age 20, I never miss a single arsenal match ' );
// } else {alert('you get wrong');}

// var have = prompt('Do I have a GMC yukon XL car? ').toLowerCase();
// if(have === 'yes' || have === 'y') {
//   console.log('yes! I have 2019 GMC Yukon XL ');
//   alert('yes! I have 2019 GMC Yukon XL ' );
// } else {alert('you get wrong');}

// alert('Well done! , come back  next time to my webpage ' + username );


var numberAttempt =  4;
var correctlyAnswered = 0;
var correctAns= 5;

for (var i = 0; i < numberAttempt; i++){
  var answer = prompt('Question');
  if(answer === correctAns)
  {
    alert('correct answer');
    correctlyAnswered = correctlyAnswered +1;
    break;
    //works
  }
  else if(answer <= 3 ){alert('too low');} //yes
  else if (answer <= 4) {alert('Close.');} // no
  else if (answer > 7){alert('Too high.');}//yes
  else if (answer >= 6){alert('Close.');}//no
}

if(correctlyAnswered === 1)
{
  alert('You got it right');
}else{alert('Youve tried 4 times. Try it next time');}//4









// // 6th Question

//  var qAnswered = false;
//  while(qAnswered === false){


  
// //  var intvalue3=parseInt(guess3);
  
 
//   var guessValue= ('guess how many of from my top ten places so fare I viseted ?');
//   if(guessValue ===5){
//   console.log('yes 5 is correct')
//   alert=('You got it right');
//   } else  {
//     (guessValue <=2) 
//     alert('too low');
//   }
//    if(guessValue >2 || <5 ) {
//   alert('try again');

//   // }
    
//   // } else {
    
//   // }
    
// //   }else if(guessValue, i<=2 );
// //   {
// //     alert('too low');
// //   }
// //   if(guessValue, i>2 && i<5) {
// //     alert('try again');
// //   }
// //   if(guessValue, i>5 && i<7) {
// //     alert('try again');
// //   }
// //   else if(guessValue, i > 7){
// //     alert ('too high') ;
// //   {
// //   var time = new Date().getHours();
// // if (time < 10) {
// //   greeting = "Good morning";
// // } else if (time < 20) {
// //   greeting = "Good day";
// // } else {
// //   greeting = "Good evening";
// // }