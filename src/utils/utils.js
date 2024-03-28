function resetAttempts(){
  'use strict';
  localStorage.setItem('attempts', JSON.stringify([
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 0},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 1},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 2},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 3},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 4},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 5},
  ]));
  localStorage.setItem('currentGuess', JSON.stringify(0));
}

export default {
  resetAttempts
};


