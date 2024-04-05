import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
    background-color: var(--primary);
    width: 100%;
    margin-top: 10px;
    height: 40px;
    margin-top: 10px;


    .choice-field {
        color: white;
        width: 100%;
        padding: 10px;
        font-size: 16px ;
        border: 1px solid white;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Kode Mono", monospace;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        background-color: var(--accent);
        border: none;
        width: 100%;
        padding: 20px;
        margin-top: 15px;
    }

    button:hover {
        background-color: #222121;
        cursor: pointer;
    }

    @media screen and (min-width: 769px) {
      width: 36.5%
    }
`;

export const Form = ({countries, isDisabled, onClickAction, onChangeAction}) => {
  return (
    <StyledForm>
      <input 
        className='choice-field' 
        list='countryNames' 
        placeholder='Country/Territory' 
        onChange={event => {onChangeAction(event.target.value);}} 
        onKeyPress={(e) => { e.key === 'Enter' && onClickAction(e);}} 
        disabled={isDisabled}/>
      <datalist className='countryNames'>
        {
          countries.map((country) => {
            return <option value={country} key={countries.indexOf(country)}/>;
          })
        }
      </datalist>
      <button type='button' onClick={(e)=> onClickAction(e)}>Guess</button>
    </StyledForm>
  );
};

Form.propTypes = {
  countries: PropTypes.arrayOf(String),
  isDisabled: PropTypes.bool,
  onClickAction: PropTypes.func,
  onChangeAction: PropTypes.func,
};

export default Form;