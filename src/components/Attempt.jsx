import React from 'react';
import PropTypes from 'prop-types';

export const Attempt = (props) => {
  return (
    <div>
      <div className='disabled-attempt' style={{display: props.hide}}></div>
      <div className='enabled-attempt' style={{display: props.show}}>
        <div className='country-attempted country-content'style={{backgroundColor: props.countryColor}}>
          <p style={{backgroundColor: props.countryColor}}>{props.country}</p>
        </div>
        <div className='continent country-content' style={{backgroundColor: props.continentColor}}>
          <p style={{backgroundColor: props.continentColor}}>{props.continent}</p>
        </div>
        <div className='language country-content' style={{backgroundColor: props.languageColor}}>
          <p style={{backgroundColor: props.languageColor}}>{props.language}</p>
        </div>
        <div className='firstLetter country-content' style={{backgroundColor: props.firstLetterColor}}>
          <p style={{backgroundColor: props.firstLetterColor}}>{props.firstLetter}</p>
        </div>
      </div>
    </div>
  );
};

Attempt.propTypes = {
  hide: PropTypes.string,
  show: PropTypes.string,
  country: PropTypes.string,
  continent: PropTypes.string,
  language: PropTypes.string,
  countryColor: PropTypes.string,
  continentColor: PropTypes.string,
  languageColor: PropTypes.string,
  firstLetter: PropTypes.string,
  firstLetterColor: PropTypes.string
};
