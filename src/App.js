import './App.css';
import { FlagView } from './Components/FlagView';
import { Navbar } from './Components/Navbar';
import { PlayView } from './Components/PlayView';
import countriesList from "countries-list";
const schedule = require('node-schedule');

const App = () => {
  // Gets Data about countrys
  const countryCodes = Object.keys(countriesList.countries);
  const countryData = countriesList.countries;
  console.log(countriesList.languages)
  const continentData = countriesList.continents;
  console.log(countryData)
  let avaliableCountries, randomCountryIndex, randomCountry, flagCountry, flagEmoji, countryCurrency, continentCode, continent

  // selects a country on random and gets the name, continent, flag, and currency
  // const rule = new schedule.RecurrenceRule();
  // rule.hour = 2;
  // rule.tz = 'EST';
  // schedule.scheduleJob(rule, function(){
  schedule.scheduleJob('*/30 * * * *', function(){
    avaliableCountries = countryCodes;
    randomCountryIndex = Math.floor(Math.random() * avaliableCountries.length);
    randomCountry = countryData[avaliableCountries[randomCountryIndex]];
    flagCountry = randomCountry.name;
    flagEmoji = randomCountry.emoji;
    let countryLang = randomCountry.languages
    console.log(countryLang)
    countryCurrency = randomCountry.currency;
    console.log(countryCurrency)
    continentCode = randomCountry.continent;
    continent = continentData[continentCode];
    console.log(flagCountry)

    localStorage.setItem("flag",  flagEmoji)
    localStorage.setItem("stats", JSON.stringify({
      "currentStreak": 0,
      "maxStreak": 0,
      "guesses": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "fail": 0 },
      "gamesPlayed": 0,
      "gamesWon": 0,
      "winPercentage": 0,
      "averageGuesses": 0
    }))
    localStorage.setItem("attempts", JSON.stringify([
      {countryAttempted: "", continent: "", currency: "", id: 0},
      {countryAttempted: "", continent: "", currency: "", id: 1},
      {countryAttempted: "", continent: "", currency: "", id: 2},
      {countryAttempted: "", continent: "", currency: "", id: 3},
      {countryAttempted: "", continent: "", currency: "", id: 4},
      {countryAttempted: "", continent: "", currency: "", id: 5},

  ]))
    localStorage.setItem("currentGuess", JSON.stringify(0))
    localStorage.setItem("country", JSON.stringify(flagCountry))
    localStorage.setItem("continent", JSON.stringify(continent))
    window.location.reload(false);
  })
  

  //Removes the selected country from the list of avaliable countries so that a country can not be selected twice 
  // avaliableCountries.pop()
  // if(avaliableCountries.length == 0){
  //   avaliableCountries = countryCodes
  // }

  return (
    <div className="App">
      <Navbar/>
      <FlagView flag={localStorage.getItem("flag")}/>
      <PlayView country={flagCountry} continent={continent} currency={countryCurrency} countryData={countryData} continentData={continentData}/>
    </div>
  );
}

export default App;
