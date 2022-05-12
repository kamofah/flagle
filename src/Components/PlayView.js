import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Attempt } from './Attempt';

export const PlayView = (props) => {

  function getStateFromLocalStorage(init, storageKey){
    let savedAttempts = localStorage.getItem(storageKey); 
    let stringifiedSavedAttempts = JSON.parse(savedAttempts);
    return stringifiedSavedAttempts || init;
  }

  const [isDisabled, setIsDisabled] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(getStateFromLocalStorage(0, 'currentGuess'));
  const [guessInput, setGuessInput] = useState('');
  const [attemptColors, setAttemptColors] = useState(getStateFromLocalStorage([
    {countryColor: '', continentColor: '', languageColor: ''},
    {countryColor: '', continentColor: '', languageColor: ''},
    {countryColor: '', continentColor: '', languageColor: ''},
    {countryColor: '', continentColor: '', languageColor: ''},
    {countryColor: '', continentColor: '', languageColor: ''},
    {countryColor: '', continentColor: '', languageColor: ''},
  ], 'attemptColors'));

  const [attempts, setAttempts] = useState(getStateFromLocalStorage([
    {countryAttempted: '', continent: '', language: '', id: 0},
    {countryAttempted: '', continent: '', language: '', id: 1},
    {countryAttempted: '', continent: '', language: '', id: 2},
    {countryAttempted: '', continent: '', language: '', id: 3},
    {countryAttempted: '', continent: '', language: '', id: 4},
    {countryAttempted: '', continent: '', language: '', id: 5},
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
      console.log(JSON.stringify(guessInput));
      console.log(localStorage.getItem('country'));
      //Display the result of the user if their attempt was incoorect
      console.log(JSON.stringify(guessInput) !== localStorage.getItem('country'));
      let guessInputCountry = Object.values(props.countryData).filter(obj => {
        return obj.name === guessInput;
      });
      if(JSON.stringify(guessInput) !== localStorage.getItem('country')){
        // fetches the data for the inputed country
        let updatedAttempts = [...attempts];
           
        // sets the different areas (Country, continent, language, firstLetter) to the right 
        attemptColors[currentGuess].countryColor = '#DC143C';
        console.log(props.continentData[guessInputCountry[0].continent]);
        console.log(localStorage.getItem('continent'));
        if(props.continentData[guessInputCountry[0].continent] === JSON.parse(localStorage.getItem('continent'))){
          attemptColors[currentGuess].continentColor = '#50C878';
        } else {
          attemptColors[currentGuess].continentColor = '#DC143C';
        }
        if(guessInputCountry[0].language === props.language){
          attemptColors[currentGuess].languageColor = '#50C878';
        } else {
          attemptColors[currentGuess].languageColor = '#DC143C';
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
        updatedAttemptColors[currentGuess] = {countryColor: '#50C878', continentColor: '#50C878', languageColor: '#50C878'};
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
    <div id='play-view-container'>
      {attempts.map((attempt) =>
      {
        if(attempt.countryAttempted && attempt.continent && attempt.language){
          return <Attempt key={attempt.id} country={attempt.countryAttempted} firstLetter={' '} continent={attempt.continent} language={attempt.language} hide="none" show="flex" countryColor={attemptColors[attempt.id].countryColor} continentColor={attemptColors[attempt.id].continentColor} languageColor={attemptColors[attempt.id].languageColor}/>;
        } else {
          return <Attempt key={attempt.id} hide="flex" show="none"/>;
        }
      })}
      <form id='guess-container'>
        <input id='choice-field' list='countryNames' placeholder='Country/Territory' onChange={event => {setGuessInput(event.target.value);}} onKeyPress={(e) => { e.key === 'Enter' && updateAttemptComponent(e);}} disabled={isDisabled}/>
        <datalist id='countryNames'>
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
