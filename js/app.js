'use strict';

//Question 1;
function seasonQuestion () {
  var preferredSeason = prompt('Do you think my favorite time of year is winter?  please answer yes or no');
  
  if(preferredSeason === 'yes' || preferredSeason === 'Y') {
    alert('incorrect');
    console.log('incorrect');
  } else{
    alert('your right!');
    console.log('your right!');
  }
}

// console.log(seasonQuestion());

//Question 2
function numberOfPets () {
  var petQuestion = prompt('how many pets do I have I have?');
  if(parseInt(petQuestion) === 1 ) {
    alert('correct!');
    console.log('correct');
  } else{
    alert('nope!');
    console.log('nope!');
  }
}

// console.log(numberOfPets());

//Question 3
function olderThan30 () {
  response = prompt('do you think im older then 30? please enter "yes or "no');
  
  if(response.toLowerCase() === 'yes' || response.toLowerCase() === 'y') {
    alert('that is correct');
    console.log('that is correct');
  } else if (response.toLowerCase() === 'no' || response.toLowerCase() === 'n') {
    alert('I am older');
    console.log('I am older');
  // } else {
  //   alert ('please respond yes or no');
  //   response = prompt('do you think im older then 30? please enter "yes or "no'); *how do we loop this prompt
  }
}

console.log(olderThan30('yes'));

//Question 4.

function sportsQuestion() {
  string = prompt('Which sport do you think I like most?');
  if(string === 'soccer' || string === 'tennis') {
    alert('You bet it is!!!!');
    console.log('You bet it is!');
  } else {
    alert('hell no!');
    console.log('hell no');
  }
}

// Question 5
function countryVisit () {
  var travel = prompt('Where was the last country I visited');
  if(travel === 'mexico') {
    alert('SI!');
    console.log('SI');
  } else {
    alert('nah');
    console.log('nah');
  }
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