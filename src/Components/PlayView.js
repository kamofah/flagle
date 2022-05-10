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
    {countryColor: '', continentColor: '', currencyColor: ''},
    {countryColor: '', continentColor: '', currencyColor: ''},
    {countryColor: '', continentColor: '', currencyColor: ''},
    {countryColor: '', continentColor: '', currencyColor: ''},
    {countryColor: '', continentColor: '', currencyColor: ''},
    {countryColor: '', continentColor: '', currencyColor: ''},
  ], 'attemptColors'));

  const [attempts, setAttempts] = useState(getStateFromLocalStorage([
    {countryAttempted: '', continent: '', currency: '', id: 0},
    {countryAttempted: '', continent: '', currency: '', id: 1},
    {countryAttempted: '', continent: '', currency: '', id: 2},
    {countryAttempted: '', continent: '', currency: '', id: 3},
    {countryAttempted: '', continent: '', currency: '', id: 4},
    {countryAttempted: '', continent: '', currency: '', id: 5},
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
           
        // sets the different areas (Country, continent, currency) to the right 
        attemptColors[currentGuess].countryColor = '#DC143C';
        console.log(props.continentData[guessInputCountry[0].continent]);
        console.log(localStorage.getItem('continent'));
        if(props.continentData[guessInputCountry[0].continent] === JSON.parse(localStorage.getItem('continent'))){
          attemptColors[currentGuess].continentColor = '#50C878';
        } else {
          attemptColors[currentGuess].continentColor = '#DC143C';
        }
        if(guessInputCountry[0].currency === props.currency){
          attemptColors[currentGuess].currencyColor = '#50C878';
        } else {
          attemptColors[currentGuess].currencyColor = '#DC143C';
        }
        //updates the attempts state
        updatedAttempts[currentGuess] = {countryAttempted: guessInput, continent: props.continentData[guessInputCountry[0].continent], currency: guessInputCountry[0].currency.substring(0,3), id: currentGuess};
        setAttempts(updatedAttempts);
        setAttemptColors(attemptColors); 
        //updates the state of currentGuess
        setCurrentGuess(currentGuess + 1);
      } else {
        //Display the result of the user if their attempt was correct
        let updatedAttempts = [...attempts];
        let updatedAttemptColors = [...attemptColors];
        updatedAttemptColors[currentGuess] = {countryColor: '#50C878', continentColor: '#50C878', currencyColor: '#50C878'};
        updatedAttempts[currentGuess] = {countryAttempted: guessInput, continent: props.continentData[guessInputCountry[0].continent], currency: guessInputCountry[0].currency, id: currentGuess};
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
        if(attempt.countryAttempted && attempt.continent && attempt.currency){
          return <Attempt key={attempt.id} country={attempt.countryAttempted} continent={attempt.continent} currency={attempt.currency} hide="none" show="flex" countryColor={attemptColors[attempt.id].countryColor} continentColor={attemptColors[attempt.id].continentColor} currencyColor={attemptColors[attempt.id].currencyColor}/>;
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
  currency: PropTypes.string
};
