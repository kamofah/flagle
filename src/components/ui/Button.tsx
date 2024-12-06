import React from 'react';

const Button = ({buttonText, buttonAction}) => {
  return (
    <button
      className="flex w-full items-center justify-center border-none bg-[#0E0AB4] p-5 text-xl uppercase text-white hover:cursor-pointer"
      type="button"
      onClick={buttonAction}
    >
      {buttonText}
    </button>
  );
};

export default Button;
