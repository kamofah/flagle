import React from 'react'
import { useState, useReducer, useEffect } from 'react';
import { Attempt } from './Attempt'

export const PlayView = (props) => {
  const [currentGuess, setCurrentGuess] = useState(0)
  const [guessInput, setGuessInput] = useState('')
  const [attempts, setAttempts] = useState([
        {countryAttempted: "", continent: "", currency: "", id: 0},
        {countryAttempted: "", continent: "", currency: "", id: 1},
        {countryAttempted: "", continent: "", currency: "", id: 2},
        {countryAttempted: "", continent: "", currency: "", id: 3},
        {countryAttempted: "", continent: "", currency: "", id: 4},
        {countryAttempted: "", continent: "", currency: "", id: 5}
    ])

  function updateAttemptComponent(e){
    // Prevents page reload on click
    e.preventDefault();

    if(currentGuess < 6){
        if(guessInput !== props.country){
             //Display the result of the user if their attempt was incoorect
            let updatedAttempts = [...attempts]
            let guessInputCountry = Object.values(props.countryData).filter(obj => {
                return obj.name === guessInput;
              });
            updatedAttempts[currentGuess] =  {countryAttempted: guessInput, continent: props.continentData[guessInputCountry[0].continent], currency: guessInputCountry[0].currency.substring(0,3), id: currentGuess};
            setAttempts(updatedAttempts);
            setCurrentGuess(currentGuess + 1);
        } else {
            //Display the result of the user if their attempt was correct
            let updatedAttempts = [...attempts]
            updatedAttempts[currentGuess] =  {countryAttempted: guessInput, continent: props.continent, currency: props.currency, id: currentGuess};
            setAttempts(updatedAttempts);
            setCurrentGuess(6);
        }
    }

    //Rests the Text Field
    e.target.value = ""
  }

  return (
    <div id='play-view-container'>
       {attempts.map((attempt) => 
        {
            if(attempt.countryAttempted && attempt.continent && attempt.currency){
                return <Attempt key={attempt.id} country={attempt.countryAttempted} continent={attempt.continent} currency={attempt.currency} hide="none" show="flex"/>
            } else {
                return <Attempt key={attempt.id} hide="flex" show="none"/>
            }
        })}
       <form id='guess-container'>
            <input id='choice-field' placeholder='Country/Territory' onChange={event => {setGuessInput(event.target.value)}}  onKeyPress={(e) => { e.key === 'Enter' && updateAttemptComponent(e);}} ></input>
            <button type='button' onClick={(e)=>
                    updateAttemptComponent(e)
            }>Guess</button>
       </form>
       
    </div>
  )
}
