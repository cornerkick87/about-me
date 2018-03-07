'use strict';

//if/else

//peudocode
//if(some condition is met) {
//do this
//};
//else {
//do something else
//};

//my five questions

var preferredSeason = prompt('Do you think my favorite time of year is winter?  please answer yes or no');
if(preferredSeason === 'yes' || preferredSeason === 'Y') {
  alert('incorrect');
} else{
  alert('your right!');
}


var petQuestion = prompt('how many pets do I have I have?');
if(parseInt(petQuestion) === 1 ) {
  alert('correct!');
} else{
  alert('nope!');
}

var myAge = prompt('do you think im older then 30? please enter "yes or "no');
if(myAge.toLowerCase() === 'yes' || myAge === 'y') {
  alert('that is correct');
} else {
  alert('I am older');
}

var favSport = prompt('Which sport do you think I like most?');
if(favSport === 'soccer' || favSport === 'tennis') {
  alert('You bet it is!!!!');
} else {
  alert('hell no!');
}

var travel = prompt('Where was the last country I visited');
if(travel === 'mexico') {
  alert('SI!');
} else {
  alert('nah');
}



// if(first condition) {
//     do this;
// } else if(second condition) {
//     do this;
// } else{
//     do this;
// }