import React from 'react'

type TextInputProps = {
    placeholder: string,
    list?: string,
    onChangeAction: (e) => void,
    enterAction: (e) => void,
    isDisabled: boolean,
}

const TextInput: React.FC<TextInputProps> = ({placeholder, list, onChangeAction, enterAction, isDisabled}) => {
  return (
    <input
        className="w-ful p-5 text-base text-black focus: outline-none"
        list={list}
        placeholder={placeholder} 
        onChange={(event) => {onChangeAction(event.target.value);}}
        onKeyDown={(e) => {e.key === 'Enter' && enterAction(e);}}
        disabled={isDisabled}
      />
  )
}

export default TextInput