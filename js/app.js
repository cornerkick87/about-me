
'use strict';

function runQuiz() {
  var score = 0;

  //Question 1;
  function question1 () {
    var preferredSeason = prompt('Do you think my favorite time of year is winter?  please answer yes or no');

    if(preferredSeason === 'yes' || preferredSeason === 'Y') {
      alert('incorrect');
      console.log('incorrect');
    } else{
      alert('your right!');
      console.log('your right!');
      return true;
    }
  }

  if(question1() === true) {
    score += 1;
  }

  //Question 2
  function question2 () {
    var petQuestion = prompt('how many pets do I have I have?');
    if(parseInt(petQuestion) === 1 ) {
      alert('correct!');
      console.log('correct');
      return true;
    } else{
      alert('nope!');
      console.log('nope!');
    }
  }

  if(question2() === true) {
    score += 1;
  }

  // console.log(question2());

  //Question 3
  function question3 () {
    var ageGuess = prompt('do you think im older then 30? please enter "yes or "no');
    if(ageGuess.toLowerCase() === 'yes' || ageGuess.toLowerCase() === 'y') {
      alert('that is correct');
      console.log('that is correct');
      return true;
    } else if (ageGuess.toLowerCase() === 'no' || ageGuess.toLowerCase() === 'n') {
      alert('I am older');
      console.log('I am older');
    // } else {
    //   alert ('please respond yes or no');
    //   ageGuess = prompt('do you think im older then 30? please enter "yes or "no'); *how do we loop this prompt
    }
  }

  if(question3() === true) {
    score += 1;
  }

  // console.log(question3('yes'));

  //Question 4.
  function question4() {
    var sportsGuess = prompt('Which sport do you think I like most?');
    if(sportsGuess === 'soccer' || sportsGuess === 'tennis') {
      alert('You bet it is!!!!');
      console.log('You bet it is!');
      return true;
    } else {
      alert('hell no!');
      console.log('hell no');
    }
  }

  if(question4() === true) {
    score += 1;
  }

  // console.log(question4());

  // Question 5
  function question5 () {
    var travel = prompt('Where was the last country I visited');
    if(travel === 'mexico') {
      alert('SI!');
      console.log('SI');
      return true;
    } else {
      alert('nah');
      console.log('nah');
    }
  }

  if(question5() === true) {
    score += 1;
  }

  // console.log(question5());

  //Question 6
  function question6() {
    var easyCode = prompt('What is my favorite type of code to write?');
    if(easyCode === 'javascript' || easyCode === 'html') {
      alert('Not yet, but hey that\'s why I came to codefellows');
      console.log('Not yet but that\'s why I came to codefellow');
    } else{
      alert('You guessed it!');
      console.log('You guessed it!');
      return true;
    }
  }

  if(question6() === true) {
    score += 1;
  }
  // console.log(question6());

  //Question 7: working one last question have syntax errors
  function question7() {
    var questionCount = 6;
    var musicArray = ['Zac Brown Band', 'Blake Shelton', 'Keith Urban', 'Carrie Underwood'];
    while (questionCount > 0) {
      var countryGuess = prompt('Which country artists do I like?');

      for (var i = 0; i < musicArray.length; i++) {
        if (countryGuess === musicArray[i]) {
          alert ('correct');
          questionCount = 0;
          return true;
        }
      }

      var indicator = questionCount -1;
      alert ('Incorrect ' + indicator + ' questions left');

      questionCount--;
    }
  }

  if(question7() === true) {
    score += 1;
  }

  // console.log(question7());

  alert (score);
}

runQuiz();



