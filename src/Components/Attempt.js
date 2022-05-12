import React from 'react';
import PropTypes from 'prop-types';

export const Attempt = (props) => {
  return (
    <div>
      <div id='disabled-attempt' style={{display: props.hide}}></div>
        
      <div id='enabled-attempt' style={{display: props.show}}>
        <div id='country-attempted' className='country-content'style={{backgroundColor: props.countryColor}}>
          <p style={{backgroundColor: props.countryColor}}>{props.country}</p>
        </div>
        <div id='continent' className='country-content' style={{backgroundColor: props.continentColor}}>
          <p style={{backgroundColor: props.continentColor}}>{props.continent}</p>
        </div>
        <div id='language' className='country-content' style={{backgroundColor: props.languageColor}}>
          <p style={{backgroundColor: props.languageColor}}>{props.language}</p>
        </div>
        <div id='firstLetter' className='country-content' style={{backgroundColor: props.languageColor}}>
          <p style={{backgroundColor: props.languageColor}}>{props.firstLetter}</p>
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
  firstLetter: PropTypes.string
};
