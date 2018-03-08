'use strict';

//Question 1
function seasonQuestion() {
  var preferredSeason = prompt('Do you think my favorite time of year is winter?  please answer yes or no');

  if(preferredSeason === 'yes' || preferredSeason === 'Y') {
    alert('incorrect');
    console.log('incorrect');
  } else{
    alert('your right!');
    console.log('your right!');
  }
}

console.log(seasonQuestion());

var petQuestion = prompt('how many pets do I have I have?');
if(parseInt(petQuestion) === 1 ) {
  alert('correct!');
  console.log('correct');
} else{
  alert('nope!');
  console.log('nope!');
}

var myAge = prompt('do you think im older then 30? please enter "yes or "no');
if(myAge.toLowerCase() === 'yes' || myAge === 'y') {
  alert('that is correct');
  console.log('that is correct');
} else {
  alert('I am older');
  console.log('I am older');
}

var favSport = prompt('Which sport do you think I like most?');
if(favSport === 'soccer' || favSport === 'tennis') {
  alert('You bet it is!!!!');
  console.log('You bet it is!');
} else {
  alert('hell no!');
  console.log('hell no');
}

var travel = prompt('Where was the last country I visited');
if(travel === 'mexico') {
  alert('SI!');
  console.log('SI');
} else {
  alert('nah');
  console.log('nah');
}

var easyCode = prompt('What is my favorite type of code to write?');
if(easyCode === 'javascript' || easyCode === 'html') {
  alert('Not yet, but hey that\'s why I came to codefellows');
  console.log('Not yet but that\'s why I came to codefellow');
} else{
  alert('You guessed it!');
  console.log('You guessed it!');
}
//working one last question have syntax errors
// function newFunction() {
//       var askAgain = true;
      
//   var askAgain = true;
// while (askAgain === true) {
//   var countryMusic = prompt('number of country songs i like?');
        
//   if (parseInt(countryMusic) === 0) {
//     alert('correct!');
//     console.log('correct');
//     askAgain = false;
//   }
//   // } else {
//   //   alert('nope!');
//   //   console.log('nope!');
//   // }