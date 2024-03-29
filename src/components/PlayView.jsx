import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DisabledAttempt from './DisabledAttempt';
import EnabledAttempt from './EnabledAttempt';
import {getStateFromStorage} from '../utils/storage';

export const PlayView = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(getStateFromStorage(0, 'currentGuess'));
  const [guessInput, setGuessInput] = useState('');
  const [attemptColors, setAttemptColors] = useState(getStateFromStorage([
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
    {countryColor: '', continentColor: '', languageColor: '', firstLetterColor: ''},
  ], 'attemptColors'));

  const [attempts, setAttempts] = useState(getStateFromStorage([
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 0},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 1},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 2},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 3},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 4},
    {countryAttempted: '', continent: '', language: '', firstLetter: '', id: 5},
  ], 'attempts'));

  useEffect(() => {
    localStorage.setItem('attempts', JSON.stringify(attempts));
    localStorage.setItem('currentGuess', JSON.stringify(currentGuess));
    localStorage.setItem('attemptColors', JSON.stringify(attemptColors));
  }, [attempts, currentGuess, attemptColors]);

  function updateAttemptComponent(e){
    // Prevents page reload on click
    e.preventDefault();
    // Checks if the user still has a turn
    if(currentGuess < 6){
      //Display the result of the user if their attempt was incoorect
      let guessInputCountry = Object.values(props.countryData).filter(obj => {
        return obj.name === guessInput;
      });
      console.log(localStorage.getItem('country').charAt(1));
      if(JSON.stringify(guessInput) !== localStorage.getItem('country')){
        // fetches the data for the inputed country
        let updatedAttempts = [...attempts];
        // sets the different areas (Country, continent, language, firstLetter) to the right
        attemptColors[currentGuess].countryColor = '#DC143C';
        /*
          TODO: Refactor the if else statements into a function that takes two parameters
          The two paremeters represent the two things that we are comparing.
        */
        if(props.continentData[guessInputCountry[0].continent] === JSON.parse(localStorage.getItem('continent'))){
          attemptColors[currentGuess].continentColor = '#50C878';
        } else {
          attemptColors[currentGuess].continentColor = '#DC143C';
        }
        if(props.languageData[guessInputCountry[0].languages[0]].name === props.language){
          attemptColors[currentGuess].languageColor = '#50C878';
        } else {
          attemptColors[currentGuess].languageColor = '#DC143C';
        }
        if(guessInputCountry[0].name.charAt(0) === localStorage.getItem('country').charAt(1)){
          attemptColors[currentGuess].firstLetterColor = '#50C878';
        } else {
          attemptColors[currentGuess].firstLetterColor = '#DC143C';
        }
        //updates the attempts state
        updatedAttempts[currentGuess] = {countryAttempted: guessInput, continent: props.continentData[guessInputCountry[0].continent], language: props.languageData[guessInputCountry[0].languages[0]].name, id: currentGuess};
        setAttempts(updatedAttempts);
        setAttemptColors(attemptColors); 
        //updates the state of currentGuess
        setCurrentGuess(currentGuess + 1);
      } else {
        //Display the result of the user if their attempt was correct
        let updatedAttempts = [...attempts];
        let updatedAttemptColors = [...attemptColors];
        updatedAttemptColors[currentGuess] = {countryColor: '#50C878', continentColor: '#50C878', languageColor: '#50C878', firstLetterColor: '#50C878'};
        updatedAttempts[currentGuess] = {countryAttempted: guessInput, continent: props.continentData[guessInputCountry[0].continent], language: props.languageData[guessInputCountry[0].languages[0]].name, id: currentGuess};
        updatedAttempts[currentGuess].countryAttempted = guessInput;
        setAttempts(updatedAttempts);
        setAttemptColors(updatedAttemptColors);
        setIsDisabled(true);
        setCurrentGuess(6);
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
      <form className='guess-container'>
        <input className='choice-field' list='countryNames' placeholder='Country/Territory' onChange={event => {setGuessInput(event.target.value);}} onKeyPress={(e) => { e.key === 'Enter' && updateAttemptComponent(e);}} disabled={isDisabled}/>
        <datalist className='countryNames'>
          {
            Object.values(props.countryData).map((country) => {
              return <option value={country.name} key={Object.values(props.countryData).indexOf(country)}/>;
            }
            )}
        </datalist>
        <button type='button' onClick={(e)=>
          updateAttemptComponent(e)
        }>Guess</button>
      </form>
    </div>
  );
};

PlayView.propTypes = {
  countryData: PropTypes.object,
  continentData: PropTypes.object,
  language: PropTypes.string,
  languageData: PropTypes.object
};
