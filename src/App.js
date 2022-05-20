import './App.css';
import {React} from 'react';
import { FlagView } from './Components/FlagView';
import { Navbar } from './Components/Navbar';
import { PlayView } from './Components/PlayView';
import countriesList from 'countries-list';
const schedule = require('node-schedule');

const App = () => {
  // Gets Data about countrys
  const countryCodes = Object.keys(countriesList.countries);
  const countryData = countriesList.countries;
  const countryLanguages = countriesList.languages;
  console.log(countryLanguages);
  const continentData = countriesList.continents;
  console.log(countryData);
  let avaliableCountries, randomCountryIndex, randomCountry, flagCountry, flagEmoji, countryCurrency, continentCode, continent, countryLangCode, countryLang;

  //Creates a list of flags in random order

  // selects a country on random and gets the name, continent, flag, and currency
  // schedule.scheduleJob('00 00 12 * * 0-6', function(){
  schedule.scheduleJob('*/10 * * * *', function(){
    avaliableCountries = countryCodes;
    randomCountryIndex = Math.floor(Math.random() * avaliableCountries.length);
    randomCountry = countryData[avaliableCountries[randomCountryIndex]];
    flagCountry = randomCountry.name;
    flagEmoji = randomCountry.emoji;
    countryLangCode = randomCountry.languages[0];
    console.log(countryLangCode);
    countryLang = countryLanguages[countryLangCode].name;
    console.log(countryLang);
    countryCurrency = randomCountry.currency;
    console.log(countryCurrency);
    continentCode = randomCountry.continent;
    continent = continentData[continentCode];
    console.log(flagCountry);

    localStorage.setItem('flag', flagEmoji);
    localStorage.setItem('stats', JSON.stringify({
      'currentStreak': 0,
      'maxStreak': 0,
      'guesses': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, 'fail': 0 },
      'gamesPlayed': 0,
      'gamesWon': 0,
      'winPercentage': 0,
      'averageGuesses': 0
    }));
    localStorage.setItem('attempts', JSON.stringify([
      {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 0},
      {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 1},
      {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 2},
      {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 3},
      {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 4},
      {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 5},
    ]));
    localStorage.setItem('currentGuess', JSON.stringify(0));
    localStorage.setItem('country', JSON.stringify(flagCountry));
    localStorage.setItem('continent', JSON.stringify(continent));
    window.location.reload(false);
  });

  //Removes the selected country from the list of avaliable countries so that a country can not be selected twice 
  // avaliableCountries.pop()
  // if(avaliableCountries.length == 0){
  //   avaliableCountries = countryCodes
  // }

  return (
    <div className="App">
      <Navbar/>
      <FlagView flag={localStorage.getItem('flag')}/>
      <PlayView country={flagCountry} countryData={countryData} continentData={continentData} languageData={countryLanguages} language={countryLang}/>
    </div>
  );
};

export default App;
