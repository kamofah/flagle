import {React, useEffect} from 'react';
import { FlagView } from './components/FlagView';
import { Navbar } from './components/Navbar';
import { PlayView } from './components/PlayView';
import countriesList from 'countries-list';
import {getItemFromStorage, resetAttempts, setDefaultStats, setItemInStorage} from './utils/storage.js';




const App = () => {
  // Actual Release Date of the game
  // const releaseDate = new Date('06-14-2024');
  const releaseDate = new Date('03-28-2024');
  const gameNumber = Math.floor((new Date() - releaseDate) / (1000 * 60 * 60 * 24));
  const countryCodes = Object.keys(countriesList.countries);
  const countryData = countriesList.countries;
  const countryLanguages = countriesList.languages;
  const continentData = countriesList.continents;
  let avaliableCountries, randomCountryIndex, randomCountry, flagCountry, flagEmoji, continentCode, continent, countryLangCode, countryLang;

  useEffect(() => {
    if(!localStorage.getItem('gameNumber')){
      setDefaultStats();
      localStorage.setItem('gameNumber', JSON.stringify(gameNumber));
      // selects a country on random and gets the name, continent, flag, and currency
      avaliableCountries = countryCodes;
      randomCountryIndex = Math.floor(Math.random() * avaliableCountries.length);
      randomCountry = countryData[avaliableCountries[randomCountryIndex]];
      flagCountry = randomCountry.name;
      flagEmoji = randomCountry.emoji;
      countryLangCode = randomCountry.languages[0];
      countryLang = countryLanguages[countryLangCode].name;
      continentCode = randomCountry.continent;
      continent = continentData[continentCode];
      setItemInStorage('solution',
        {
          'flag': flagEmoji,
          'country': flagCountry,
          'continent': continent
        });
      resetAttempts();
      window.location.reload();
    } else if (gameNumber != localStorage.getItem('gameNumber')){
      localStorage.setItem('gameNumber', JSON.stringify(gameNumber));
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
      setItemInStorage('solution',
        {
          'flag': flagEmoji,
          'country': flagCountry,
          'continent': continent
        });
      resetAttempts();
    }

  }, [gameNumber]);

  return (
    <div className="App">
      <Navbar/>
      <FlagView flag={getItemFromStorage('solution').flag}/>
      <PlayView 
        country={flagCountry} 
        countryData={countryData} 
        continentData={continentData} 
        languageData={countryLanguages} 
        language={countryLang}/>
    </div>
  );
};

export default App;
