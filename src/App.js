import './App.css';
import {React, useRef ,useEffect} from 'react';
import { FlagView } from './components/FlagView.js';
import { Navbar } from './components/Navbar.js';
import { PlayView } from './components/PlayView.js';
import countriesList from 'countries-list';
import resetAttempts from './utils/utils.js';

const App = () => {
  // Actual Release Date of the game
  // const releaseDate = new Date('2024-06-14');
  const releaseDate = new Date('2024-03-29');
  const gameNumber = useRef(Math.floor((new Date() - releaseDate) / (1000 * 60 * 60 * 24)));
  const prevGameNumber = useRef(gameNumber.current);

  console.log(releaseDate);
  console.log(gameNumber);
  const countryCodes = Object.keys(countriesList.countries);
  const countryData = countriesList.countries;
  const countryLanguages = countriesList.languages;
  const continentData = countriesList.continents;
  let avaliableCountries, randomCountryIndex, randomCountry, flagCountry, flagEmoji, continentCode, continent, countryLangCode, countryLang;

  localStorage.setItem('stats', JSON.stringify({
    'currentStreak': 0,
    'maxStreak': 0,
    'guesses': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, 'fail': 0 },
    'gamesPlayed': 0,
    'gamesWon': 0,
    'winPercentage': 0,
    'averageGuesses': 0
  }));


  useEffect(() => {
    console.log(localStorage.getItem('flag'));
    if (gameNumber.current !== prevGameNumber.current) {
      console.log('UseEffect Ran');
      prevGameNumber.current = gameNumber.current;
      // Other useEffect logic...
      
      // selects a country on random and gets the name, continent, flag, and currency
      avaliableCountries = countryCodes;
      randomCountryIndex = Math.floor(Math.random() * avaliableCountries.length);
      randomCountry = countryData[avaliableCountries[randomCountryIndex]];
      flagCountry = randomCountry.name;
      console.log(flagCountry);
      flagEmoji = randomCountry.emoji;
      countryLangCode = randomCountry.languages[0];
      countryLang = countryLanguages[countryLangCode].name;
      continentCode = randomCountry.continent;
      continent = continentData[continentCode];
      localStorage.setItem('flag', flagEmoji);
      resetAttempts();
      localStorage.setItem('country', JSON.stringify(flagCountry));
      localStorage.setItem('continent', JSON.stringify(continent));
    }
  }, [gameNumber.current]);

  return (
    <div className="App">
      <Navbar/>
      <FlagView flag={localStorage.getItem('flag')}/>
      <PlayView country={flagCountry} countryData={countryData} continentData={continentData} languageData={countryLanguages} language={countryLang}/>
    </div>
  );
};

export default App;
