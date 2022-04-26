import './App.css';
import { FlagView } from './Components/FlagView';
import { Navbar } from './Components/Navbar';
import { PlayView } from './Components/PlayView';
import countriesList from "countries-list";

const App = () => {
  // Gets Data about countrys
  const countryCodes = Object.keys(countriesList.countries);
  const countryData = countriesList.countries;
  const continentData = countriesList.continents;
  console.log(countryData)

  // selects a country on random and gets the name, continent, flag, and currency
  let avaliableCountries = countryCodes;
  let randomCountryIndex = Math.floor(Math.random() * avaliableCountries.length);
  const randomCountry = countryData[avaliableCountries[randomCountryIndex]];
  let flagCountry = randomCountry.name;
  let flagEmoji = randomCountry.emoji;
  let countryCurrency = randomCountry.currency;
  console.log(countryCurrency)
  let continentCode = randomCountry.continent;
  let continent = continentData[continentCode];
  console.log(flagCountry)


  //Removes the selected country from the list of avaliable countries so that a country can not be selected twice 
  // avaliableCountries.pop()
  // if(avaliableCountries.length == 0){
  //   avaliableCountries = countryCodes
  // }

  return (
    <div className="App">
      <Navbar/>
      <FlagView flag={flagEmoji}/>
      <PlayView country={flagCountry} continent={continent} currency={countryCurrency} countryData={countryData} continentData={continentData}/>
    </div>
  );
}

export default App;
