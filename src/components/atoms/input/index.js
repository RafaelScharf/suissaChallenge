import React, { useState } from 'react';
import { 
  isNumberOrDot,
  countDots,
  replaceDots
} from './utils';

let isBackspace = false;

const Input = () => {

  const [number, setNumber] = useState();

  const handleChangeKeyPress = evt => {
    if ( evt.keyCode == 8 ) 
      isBackspace = true
      
    setNumber(
      (isNumberOrDot(evt))
        ? evt.target.value + evt.key
        : evt.target.value
    )
  }

  const handleChangeKeyUp = evt => {
    if (isBackspace) return false;
    setNumber(
      (countDots(evt) == 0 || isBackspace)
        ? evt.target.value
        : replaceDots(evt)
    )
  }

  const handleChange = evt => {
    if ( isBackspace ){
      isBackspace = false;
      return setNumber(evt.target.value);
    }

    setNumber(
      (/[a-zA-Z]|,/gim.test(evt.target.value))
        ? evt.target.value.replace(/[a-zA-Z]|,/gim, '')
        : evt.target.value.slice(0, -1)
    )
  }
  
  
  return (
    <div className="Input">
      
      <input
      value={number}
      onKeyDown={handleChangeKeyPress}
      onKeyUp={handleChangeKeyUp}
      onChange={handleChange}
      ></input>
      <p>{number}</p>
    </div>
  );
}

export default Input;
