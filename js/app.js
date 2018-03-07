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

var preferredSeason = parseInt(prompt('Do you think my favorite time of year is winter?'));
if(preferredSeason === 'yes' || preferredSeason === 'Y') {
  alert('incorrect');
} else{
  alert('your right!');
}


var petQuestion = parseInt(prompt('do I own 1 pets?'));
if(petQuestion === 'yes') {
  alert('correct!');
} else{
  alert('nope!, try again!');
}

var myAge = parseInt(prompt('do you think im older then 30? please enter "yes or "no')).toLowerCase();
if(myAge === 'yes' || myAge === 'y') {
  alert('that is correct');
} else {
  alert('no, I am older!');
}

// if(first condition) {
//     do this;
// } else if(second condition) {
//     do this;
// } else{
//     do this;
// }