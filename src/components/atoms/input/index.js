import React, { useState } from 'react';
import { 
  isNumberOrDot,
  countDots,
  replaceDots
} from './utils';

const Input = () => {

  const [number, setNumber] = useState();

  const handleChangeKeyPress = evt => {
    setNumber(
      (isNumberOrDot(evt))
        ? evt.target.value + evt.key
        : evt.target.value
    )
  }

  const handleChangeKeyUp = evt => {
    setNumber(
      (countDots(evt) == 0)
        ? ( evt.keyCode == 8 )
            ? evt.target.value.slice(0, -1)
            : evt.target.value
        : replaceDots(evt)
    )
  }

  const handleChange = evt => {
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
      onKeyPress={handleChangeKeyPress}
      onKeyUp={handleChangeKeyUp}
      onChange={handleChange}
      ></input>
      <p>{number}</p>
    </div>
  );
}

export default Input;
