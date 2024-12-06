import React from 'react'

type TextInputProps = {
    isDisabled: boolean,
    onChangeAction: (e) => void,
    enterAction: (e) => void
}


const TextInput: React.FC<TextInputProps> = ({isDisabled, onChangeAction, enterAction}) => {
  return (
    <input
        className="w-full border border-solid border-white p-5 text-base text-white"
        list="countryNames"
        placeholder="Country/Territory"
        onChange={(event) => {onChangeAction(event.target.value);}}
        onKeyDown={(e) => {e.key === 'Enter' && enterAction(e);}}
        disabled={isDisabled}
      />
  )
}

export default TextInput