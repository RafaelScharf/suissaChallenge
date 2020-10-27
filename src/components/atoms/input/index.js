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

  const handlePaste = evt => {
    console.log('paste:', {evt}, evt.target.value, evt.key)
  }
  
  
  return (
    <div className="Input">
      
      <input
      value={number}
      onKeyPress={handleChangeKeyPress}
      onKeyUp={handleChangeKeyUp}
      // onPaste={handlePaste}
      ></input>
      <p>{number}</p>
    </div>
  );
}

export default Input;
