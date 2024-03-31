import React from 'react';
import PropTypes from 'prop-types';
import DisabledAttempt from './DisabledAttempt';
import EnabledAttempt from './EnabledAttempt';
import Form from './Form';
import { useState, useEffect } from 'react';
import {getItemFromStorage, getItemFromStorageDefault, setUserAttemptData} from '../utils/storage';
import { getListOfCountries, validateUserAttempt } from '../utils/misc';
import { fetchCountryByName } from '../api/country';
import { formatContinentText } from '../utils/formatting';


export const PlayView = ({solution}) => {
  const [countries, setCountries] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentAttempt, setCurrentAttempt] = useState(getItemFromStorageDefault(0, 'currentAttempt'));
  const [guessInput, setGuessInput] = useState('');
  const [attemptColors, setAttemptColors] = useState(getItemFromStorageDefault([
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
  ], 'attemptColors'));

  const [attempts, setAttempts] = useState(getItemFromStorageDefault([
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 0},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 1},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 2},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 3},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 4},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 5},
  ], 'attempts'));

  useEffect(() => {
    setUserAttemptData(attempts, attemptColors, currentAttempt);
    setCountries(Array(getListOfCountries()));
  }, [attempts, currentAttempt, attemptColors]);

  function updateAttemptComponent(e){
    e.preventDefault();
    
    // Checks if the user still has a turn
    if(currentAttempt < 6){
      // Fetch data on user entered country
      const countryResponse = fetchCountryByName(guessInput);
      const userAttemptContinent = formatContinentText(countryResponse.continents);
      const userAttemptLanguage = countryResponse.languages[0];

      //Display the result of the user if their attempt was incoorect
      // let guessInputCountry = countries.filter(country => {
      //   return country === guessInput;
      // })[0];

      if(JSON.stringify(guessInput) !== solution.country){
        // fetches the data for the inputed country
        let updatedAttempts = [...attempts];
        // sets the different areas (Country, continent, language, firstLetter) to the right
        attemptColors[currentAttempt].countryColor = '#DC143C';
        /*
          TODO: Refactor the if else statements into a function that takes two parameters
          The two paremeters represent the two things that we are comparing.
        */
        validateUserAttempt(
          formatContinentText(countryResponse.continents), 
          getItemFromStorage('continent'), 
          currentAttempt,
          attemptColors, 
          'continentColor');

        // if(props.continentData[guessInputCountry[0].continent] === getItemFromStorage('continent')){
        //   attemptColors[currentAttempt].continentColor = '#50C878';
        // } else {
        //   attemptColors[currentAttempt].continentColor = '#DC143C';
        // }
        // if(props.languageData[guessInputCountry[0].languages[0]].name === props.language){
        //   attemptColors[currentAttempt].languageColor = '#50C878';
        // } else {
        //   attemptColors[currentAttempt].languageColor = '#DC143C';
        // }
        // if(guessInputCountry[0].name.charAt(0) === localStorage.getItem('country').charAt(1)){
        //   attemptColors[currentAttempt].firstLetterColor = '#50C878';
        // } else {
        //   attemptColors[currentAttempt].firstLetterColor = '#DC143C';
        // }

        //updates the attempts state
        updatedAttempts[currentAttempt] = {
          countryAttempted: guessInput,
          continent: userAttemptContinent,
          language: userAttemptLanguage,
          id: currentAttempt};
        setAttempts(updatedAttempts);
        setAttemptColors(attemptColors); 
        //updates the state of currentAttempt
        setCurrentAttempt(currentAttempt + 1);
      } else {
        //Display the result of the user if their attempt was correct
        let updatedAttempts = [...attempts];
        let updatedAttemptColors = [...attemptColors];
        updatedAttemptColors[currentAttempt] = {countryColor: '#50C878', continentColor: '#50C878', languageColor: '#50C878', firstLetterColor: '#50C878'};
        updatedAttempts[currentAttempt] = solution;
        updatedAttempts[currentAttempt].countryAttempted = guessInput;
        setAttempts(updatedAttempts);
        setAttemptColors(updatedAttemptColors);
        setIsDisabled(true);
        setCurrentAttempt(6);
      }
    }
    //Rests the Text Field
    e.target.value = '';
  }

  return (
    <div className='play-view-container'>
      {attempts.map((attempt) =>
      {
        if(attempt.countryAttempted && attempt.continent && attempt.language){
          return <EnabledAttempt key={attempt.id} attemptData={attempt} attemptColorData={attemptColors[attempt.id]} />;
        } else {
          return <DisabledAttempt key={attempt.id}/>;
        }
      })}
      <Form 
        countries={countries} 
        isDisabled={isDisabled} 
        onClickAction={updateAttemptComponent} 
        onChangeAction={setGuessInput}/>
    </div>
  );
};

PlayView.propTypes = {
  solution: PropTypes.object,
};
