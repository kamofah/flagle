import {
  fetchCountriesData,
  fetchCountryNames,
} from '../api/country';
import { formatContinentText } from './formatting';

export const selectCountry = async () => {
  // Fetch all countries from the API
  const countries = await fetchCountriesData();

  // Randomly select a country
  const selectedCountryIndex = Math.floor(
    Math.random() * countries.length
  );
  const selectedCountry = countries[selectedCountryIndex];

  // Get the countries name, flag, continents, and language
  const countryName = selectedCountry.name.common;
  const countryFlag = selectedCountry.flag;
  const continent = formatContinentText(
    selectedCountry.continents
  );
  const countryLanguage = Object.values(
    selectedCountry.languages
  )[0];

  // console.log(countryName, continents, countryFlag, countryLanguage);
  return [
    countryName,
    countryFlag,
    continent,
    countryLanguage,
  ];
};

export const getListOfCountries = async () => {
  const countryNamesResponse = await fetchCountryNames();
  const listOfCountries = countryNamesResponse.map(
    (countryName) => {
      return countryName.name.common;
    }
  );
  return listOfCountries;
};

export const validateUserAttempt = (
  userAttempt,
  correctSolution,
  currentAttemptNumber,
  colorMap,
  colorVariable
) => {
  if (userAttempt === correctSolution) {
    colorMap[currentAttemptNumber][colorVariable] =
      '#50C878';
  } else {
    colorMap[currentAttemptNumber][colorVariable] =
      '#DC143C';
  }
};

export const calcDistanceBetweenCordinates = (
  lat1,
  lon1,
  lat2,
  lon2
) => {
  const earthRadiusInKM = 6371;
  const dLatInRad = toRad(lat2 - lat1);
  const dLonInRad = toRad(lon2 - lon1);
  const lat1InRad = toRad(lat1);
  const lat2InRad = toRad(lat2);

  var a =
    Math.sin(dLatInRad / 2) * Math.sin(dLatInRad / 2) +
    Math.sin(dLonInRad / 2) *
      Math.sin(dLonInRad / 2) *
      Math.cos(lat1InRad) *
      Math.cos(lat2InRad);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = earthRadiusInKM * c;
  return distance;
};

function toRad(value) {
  return (value * Math.PI) / 180;
}
