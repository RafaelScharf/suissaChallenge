import React, { useState } from 'react';
import { 
  isNumberOrDot,
  countDots,
  replaceDots
} from './utils';

let isBackspace = false;
let inputValue = '';

const Input = () => {

  const [number, setNumber] = useState('');

  console.log({inputValue}, {number})
  const handleChangeKeyPress = evt => {
    
    console.log('handleChangeKeyPress', {inputValue}, {number})
    if ( evt.keyCode == 8 ) 
      isBackspace = true
    console.log('handleChangeKeyPress', {isBackspace}, evt.keyCode, evt.target.value)
    setNumber(
      (isNumberOrDot(evt))
        ? evt.target.value + evt.key
        : evt.target.value.replace(/[a-zA-Z]|,|:|\\/gim, '')
    )
  }


  const handleChangeKeyUp = evt => {
    
    console.log('handleChangeKeyUp', {inputValue}, {number})
    if (isBackspace) return false;
    setNumber(
      (countDots(evt) == 0 || isBackspace)
        ? evt.target.value
        : replaceDots(evt)
    )
  }

  const handleChange = evt => {

    console.log('handleChange', {inputValue}, {number})
    console.log('change:', evt.keyCode, evt.target.value)
    console.log({isBackspace}, evt.keyCode)
    if ( isBackspace ){
      isBackspace = false;
      return setNumber(evt.target.value.replace(/†|[a-zA-Z]|,|:|\?|=|-|\//gim, ''));
    }

    if (inputValue == "") {
      inputValue = evt.target.value.replace(/†|[a-zA-Z]|,|:|\?|=|-|\//gim, '')
      setNumber(inputValue)
      console.log('handleChange', {inputValue}, {number})
    }

    else {
      setNumber(
        (/[a-zA-Z]|,/gim.test(evt.target.value))
          ? evt.target.value.replace(/†|[a-zA-Z]|,|:|\?|=|-|\//gim, '')
          : evt.target.value.slice(0, -1)
      )

    }
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