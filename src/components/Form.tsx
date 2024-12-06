import React from 'react';
// import styled from 'styled-components';

// const StyledForm = styled.form`

//     button {
//         font-family: "Kode Mono", monospace;
//         font-weight: 700;
//         letter-spacing: 2px;
//         background-color: var(--accent);
//     }
// `;

export const Form = ({
  countries,

  onClickAction,

}) => {
  return (
    <form className="mt-2.5 h-10 w-full">
      
      <datalist className="countryNames">
        {countries.map((country) => {
          return (
            <option
              value={country}
              key={countries.indexOf(country)}
            />
          );
        })}
      </datalist>
      <button
        className="flex w-full items-center justify-center border-none bg-[#222121] p-5 text-xl uppercase hover:cursor-pointer"
        type="button"
        onClick={(e) => onClickAction(e)}
      >
        Guess
      </button>
    </form>
  );
};

export default Form;
