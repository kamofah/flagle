import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledEnabledAttempt = styled.div`
  display: flex;
  width: 31.25rem;
  height: 40px;
  margin-top: 10px;
`;

export const EnabledAttempt = ({attemptData, attemptColorData}) => {
  return (
    <StyledEnabledAttempt>
      <div className='country-attempted country-content'style={{backgroundColor: attemptColorData.countryColor}}>
        <p style={{backgroundColor: attemptColorData.countryColor}}>{attemptData.countryAttempted}</p>
      </div>
      <div className='continent country-content' style={{backgroundColor: attemptColorData.continentColor}}>
        <p style={{backgroundColor: attemptColorData.continentColor}}>{attemptData.continent}</p>
      </div>
      <div className='language country-content' style={{backgroundColor: attemptColorData.languageColor}}>
        <p style={{backgroundColor: attemptColorData.languageColor}}>{attemptData.language}</p>
      </div>
      <div className='firstLetter country-content' style={{backgroundColor: attemptColorData.firstLetterColor}}>
        <p style={{backgroundColor: attemptColorData.firstLetterColor}}>{attemptData.firstLetter}</p>
      </div>
    </StyledEnabledAttempt>
  );
};

EnabledAttempt.propTypes = {
  attemptData: PropTypes.object,
  attemptColorData: PropTypes.object,
};

export default EnabledAttempt;