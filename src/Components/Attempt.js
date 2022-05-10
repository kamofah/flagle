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
        <div id='currency' className='country-content' style={{backgroundColor: props.currencyColor}}>
          <p style={{backgroundColor: props.currencyColor}}>{props.currency}</p>
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
  currency: PropTypes.string,
  countryColor: PropTypes.string,
  continentColor: PropTypes.string,
  currencyColor: PropTypes.string
};
