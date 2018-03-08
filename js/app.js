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

console.log(seasonQuestion());

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

console.log(numberOfPets());

//Question 3
function olderThan30 () {
  var ageGuess = prompt('do you think im older then 30? please enter "yes or "no');
  if(ageGuess.toLowerCase() === 'yes' || ageGuess.toLowerCase() === 'y') {
    alert('that is correct');
    console.log('that is correct');
  } else if (ageGuess.toLowerCase() === 'no' || ageGuess.toLowerCase() === 'n') {
    alert('I am older');
    console.log('I am older');
  // } else {
  //   alert ('please respond yes or no');
  //   ageGuess = prompt('do you think im older then 30? please enter "yes or "no'); *how do we loop this prompt
  }
}

console.log(olderThan30('yes'));

//Question 4.
function sportsQuestion() {
  var sportsGuess = prompt('Which sport do you think I like most?');
  if(sportsGuess === 'soccer' || sportsGuess === 'tennis') {
    alert('You bet it is!!!!');
    console.log('You bet it is!');
  } else {
    alert('hell no!');
    console.log('hell no');
  }
}

console.log(sportsQuestion());

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

console.log(countryVisit());

//Question 6
function favCode() {
  var easyCode = prompt('What is my favorite type of code to write?');
  if(easyCode === 'javascript' || easyCode === 'html') {
    alert('Not yet, but hey that\'s why I came to codefellows');
    console.log('Not yet but that\'s why I came to codefellow');
  } else{
    alert('You guessed it!');
    console.log('You guessed it!');
  }
}

console.log(favCode());

//Question 7: working one last question have syntax errors
function countryMusic() {
  var questionCount = 6;
  var musicArray = ['Zac Brown Band', 'Blake Shelton', 'Keith Urban', 'Carrie Underwood'];
  while (questionCount > 0) {
    var countryGuess = prompt('Which country artists do I like?');

    for (var i = 0; i < musicArray.length; i++) {
      if (countryGuess === musicArray[i]) {
        alert ('correct');
        questionCount = 0;
        break;
      }
    }

    var indicator = questionCount -1;
    alert ('Incorrect ' + indicator + ' questions left');

    questionCount--;
  }
}

console.log(countryMusic());