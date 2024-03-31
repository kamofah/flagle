import React from 'react';
import styled from 'styled-components';


const StyledDisabledAttempt = styled.div`
    background-color: var(--primary);
    width: 100%;
    margin-top: 10px;
    height: 40px;
`;

export const DisabledAttempt = () => {
  return (
    <StyledDisabledAttempt></StyledDisabledAttempt>
  );
};

export default DisabledAttempt;