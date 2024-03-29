import {React, useEffect} from 'react';
import { FlagView } from './components/FlagView';
import { Navbar } from './components/Navbar';
import { PlayView } from './components/PlayView';
import {getItemFromStorage, resetAttempts, setDefaultStats, setItemInStorage} from './utils/storage';
import { selectCountry } from './utils/misc';

let flagEmoji, flagCountry, continent, countryLanguage;

const App = () => {
  console.log(selectCountry());
  // Actual Release Date of the game
  // const releaseDate = new Date('06-14-2024');
  const releaseDate = new Date('03-28-2024');
  const gameNumber = Math.floor((new Date() - releaseDate) / (1000 * 60 * 60 * 24));
  

  useEffect(() => {
    if(!localStorage.getItem('gameNumber')){
      ({flagEmoji, flagCountry, continent, countryLanguage} = selectCountry());
      setDefaultStats();
      setItemInStorage('gameNumber', gameNumber);
      setItemInStorage('solution',
        {
          'flag': flagEmoji,
          'country': flagCountry,
          'continent': continent
        });
      resetAttempts();
      window.location.reload();
    } else if (gameNumber != localStorage.getItem('gameNumber')){
      ({flagEmoji, flagCountry, continent, countryLanguage} = selectCountry());
      setItemInStorage('gameNumber', gameNumber);
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
        // countryData={countryData} 
        // continentData={continentData} 
        // languageData={countryLanguages} 
        language={countryLanguage}/>
    </div>
  );
};

export default App;
