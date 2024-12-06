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
  isDisabled,
  onClickAction,
  onChangeAction,
}) => {
  return (
    <form className="mt-2.5 h-10 w-full">
      <input
        className="w-full border border-solid border-white p-2.5 text-base text-white"
        list="countryNames"
        placeholder="Country/Territory"
        onChange={(event) => {
          onChangeAction(event.target.value);
        }}
        onKeyDown={(e) => {
          e.key === 'Enter' && onClickAction(e);
        }}
        disabled={isDisabled}
      />
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
