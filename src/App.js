import {React, useState, useEffect} from 'react';
import { FlagView } from './components/FlagView';
import { Navbar } from './components/Navbar';
import { PlayView } from './components/PlayView';
import { RotatingLines } from 'react-loader-spinner';
import {getItemFromStorage, resetAttempts, setDefaultStats, setItemInStorage} from './utils/storage';
import {selectCountry } from './utils/misc';
let countryFlag, countryName, countryContinent, countryLanguage;

const App = () => {
  // Actual Release Date of the game
  // const releaseDate = new Date('06-14-2024');
  const releaseDate = new Date('03-29-2024');
  const gameNumber = Math.floor((new Date() - releaseDate) / (1000 * 60 * 60 * 24));
  const [isLoading, setIsLoading] = useState(true);
  const fetchSolutionData = async () => {
    try {
      const selectedCountryData = await selectCountry();
      [countryName, countryFlag, countryContinent, countryLanguage] = selectedCountryData;
      console.log(countryName, countryFlag, countryContinent, countryLanguage);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  useEffect( async () => {
    await fetchSolutionData();
    console.log(countryFlag);
    if(!localStorage.getItem('gameNumber')){
      console.log('run 1');
      setDefaultStats();
      setItemInStorage('gameNumber', gameNumber);
      setItemInStorage('solution',
        {
          'country': countryName,
          'flag': countryFlag,
          'continent': countryContinent,
          'language': countryLanguage
        });
      resetAttempts();
      console.log(getItemFromStorage('solution'));
      setIsLoading(false);
      // window.location.reload();
    } else if (gameNumber != parseInt(localStorage.getItem('gameNumber'))){
      console.log('run 2');
      setItemInStorage('gameNumber', gameNumber);
      setItemInStorage('solution',
        {
          'country': countryName,
          'flag': countryFlag,
          'continent': countryContinent,
          'language': countryLanguage
        });
      resetAttempts();
      console.log('2');
    }
    setIsLoading(false);
  }, [gameNumber]);

  return (
    <div className="App">
      <Navbar/>
      {
        isLoading ?
          <FlagView flag={
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"/>
          }/>
          :
          <FlagView flag={getItemFromStorage('solution').flag }/>
      }
      <PlayView solution={getItemFromStorage('solution')}/>
    </div>
  );
};

export default App;
