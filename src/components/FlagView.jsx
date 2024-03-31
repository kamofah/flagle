import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const Flag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  font-size: 250px;
  min-width: 35%;
`;
export const FlagView = ({flag}) => {
  return (
    <FlagContainer>
      <Flag>
        {flag}
      </Flag>
    </FlagContainer>
  );
};

FlagView.propTypes = {
  flag: PropTypes.any
};
