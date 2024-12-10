const resetAttempts = () => {
  'use strict';
  localStorage.setItem(
    'attempts',
    JSON.stringify([
      {
        countryAttempted: '',
        continent: '',
        language: '',
        firstLetter: '',
        id: 0,
      },
      {
        countryAttempted: '',
        continent: '',
        language: '',
        firstLetter: '',
        id: 1,
      },
      {
        countryAttempted: '',
        continent: '',
        language: '',
        firstLetter: '',
        id: 2,
      },
      {
        countryAttempted: '',
        continent: '',
        language: '',
        firstLetter: '',
        id: 3,
      },
      {
        countryAttempted: '',
        continent: '',
        language: '',
        firstLetter: '',
        id: 4,
      },
      {
        countryAttempted: '',
        continent: '',
        language: '',
        firstLetter: '',
        id: 5,
      },
    ])
  );
  localStorage.setItem('currentGuess', JSON.stringify(0));
};

const setUserAttemptData = (
  attempts,
  attemptColors,
  currentAttempt
) => {
  localStorage.setItem(
    'attempts',
    JSON.stringify(attempts)
  );
  localStorage.setItem(
    'attemptColors',
    JSON.stringify(attemptColors)
  );
  localStorage.setItem(
    'currentAttempt',
    JSON.stringify(currentAttempt)
  );
};

const getItemFromStorageDefault = (init, storageKey) => {
  let savedAttempts = localStorage.getItem(storageKey);
  let stringifiedSavedAttempts = JSON.parse(savedAttempts);
  return stringifiedSavedAttempts || init;
};

const getItemFromStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

const setItemInStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const setDefaultStats = () => {
  localStorage.setItem(
    'stats',
    JSON.stringify({
      currentStreak: 0,
      maxStreak: 0,
      guesses: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        fail: 0,
      },
      gamesPlayed: 0,
      gamesWon: 0,
      winPercentage: 0,
      averageGuesses: 0,
    })
  );
};

module.exports = {
  resetAttempts,
  setUserAttemptData,
  getItemFromStorageDefault,
  getItemFromStorage,
  setItemInStorage,
  setDefaultStats,
};
