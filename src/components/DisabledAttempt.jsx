import React from 'react';
import styled from 'styled-components';


const StyledDisabledAttempt = styled.div`
    background-color: var(--primary);
    width: 100%;
    margin-top: 10px;
    height: 40px;

    @media screen and (min-width: 769px) {
      width: 37.5%
    }
`;

export const DisabledAttempt = () => {
  return (
    <StyledDisabledAttempt></StyledDisabledAttempt>
  );
};

export default DisabledAttempt;