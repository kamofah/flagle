const api = 'https://restcountries.com/v3.1/';
const apiIndepent =
  'https://restcountries.com/v3.1/independent?status=true&fields=';

const fetchCountriesData = async () => {
  const response = await fetch(`${api}/all`);
  const countries = await response.json();
  return countries;
};

const fetchCountryByName = async (countryName) => {
  const response = await fetch(`${api}name/${countryName}`);
  const country = await response.json();
  return country;
};

const fetchCountryNames = async () => {
  const response = await fetch(`${apiIndepent}name`);
  const countryNames = await response.json();
  return countryNames;
};

module.exports = {
  fetchCountriesData,
  fetchCountryByName,
  fetchCountryNames,
};
