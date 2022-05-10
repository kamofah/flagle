import React from 'react';
import PropTypes from 'prop-types';

export const FlagView = (props) => {
  return (
    <div id="flag-view-container">
      <div id='flag-view'>
        <h1 id='flag'>{props.flag}</h1>
      </div>
    </div>
  );
};

FlagView.propTypes = {
  flag: PropTypes.string
};
