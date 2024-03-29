import { fetchCountries, fetchCountryNames, } from '../api/country';
import { formatContinentText } from './formatting';

export const selectCountry = async () => {
  // Fetch all countries from the API
  const countries = await fetchCountries();

  // Randomly select a country
  const selectedCountryIndex = Math.floor(Math.random() * countries.length);
  const selectedCountry = countries[selectedCountryIndex];

  // Get the countries name, flag, continents, and language
  const countryName = selectedCountry.name.common;
  const countryFlag = selectedCountry.flag;
  const continents = formatContinentText(selectedCountry.continents);
  const countryLanguage = Object.values(selectedCountry.languages)[0];

  console.log(countryName, continents, countryFlag, countryLanguage);
  return [countryName, countryFlag, continents, countryLanguage];
};

export const getListOfCountries = async () => {
  const countryNamesList = await fetchCountryNames();
  
  return countryNamesList;
};