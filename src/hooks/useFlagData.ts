import {useState, useEffect} from 'react';  
import {getItemFromStorage, resetAttempts, setDefaultStats, setItemInStorage} from '../utils/storage';
import {selectCountry } from '../utils/misc';

let countryFlag, countryName, countryContinent, countryLanguage;
const releaseDate = new Date('06-14-2025').getTime();  // Actual Release Date of the game
const gameNumber = Math.floor((new Date().getTime() - releaseDate) / (1000 * 60 * 60 * 24));


const fetchSolutionData = async () => {
    try {
        const selectedCountryData = await selectCountry();
        [countryName, countryFlag, countryContinent, countryLanguage] = selectedCountryData;
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
};

const intializeGame = async () => {
    await fetchSolutionData();
    setItemInStorage('gameNumber', gameNumber);
    setItemInStorage('solution',
      {
        'country': countryName,
        'flag': countryFlag,
        'continent': countryContinent,
        'language': countryLanguage
      });
    resetAttempts();
    return getItemFromStorage('solution');
};


export const useFlagData = () => {
  const [flagData, setFlagData] = useState(intializeGame)
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect( () => {
    const asyncUseEffectWrapper = async () => {
      if(!localStorage.getItem('gameNumber')){
        setDefaultStats();
        setFlagData(await intializeGame());
      } else if (gameNumber != parseInt(getItemFromStorage('gameNumber'))){
        await intializeGame();
      }
      setIsLoading(false);
    };
    asyncUseEffectWrapper();
  }, [gameNumber]);

  return {
    flagData,
    isLoading
  }
}