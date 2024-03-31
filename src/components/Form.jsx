import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
    background-color: var(--primary);
    width: 31.25rem;
    margin-top: 10px;
    height: 40px;

    .choice-field {
        color: white;
        width: 500px;
        margin-top: 10px;
        padding: 10px;
        font-size: 16px ;
        border: 1px solid white;
    }

    button {
        width: 500px;
        font-family: "Kode Mono", monospace;
        background-color: var(--accent);
        font-size: 20px;
        letter-spacing: 2px;
        font-weight: 700;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        margin-top: 15px;
        text-transform: uppercase;
    }

    button:hover {
        background-color: #222121;
        cursor: pointer;
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