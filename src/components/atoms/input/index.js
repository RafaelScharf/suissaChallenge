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
        ? evt.target.value
        : replaceDots(evt)
    )
  }
  
  return (
    <div className="Input">
      
      <input
      value={number}
      onKeyPress={handleChangeKeyPress}
      onKeyUp={handleChangeKeyUp}
      ></input>
      <p>{number}</p>
    </div>
  );
}

export default Input;
