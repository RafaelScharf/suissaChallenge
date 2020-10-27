import React, { useState } from 'react';

const onlyNumbersRegex = /\d/
const dotRegex = /\./g
const isNumberOrDot = (val) => onlyNumbersRegex.test(val) || dotRegex.test(val)
const countDots = (val) => (val.match(dotRegex) || []).length
const replaceDots = (val) => val.replace('.', '_').replaceAll('.', '').replace('_', '.')

const Input = () => {

  const [number, setNumber] = useState();

  const handleChangeKeyPress = evt => {
    setNumber(
      (isNumberOrDot(evt.key))
        ? evt.target.value + evt.key
        : evt.preventDefault()
    )
  }

  const handleChangeKeyUp = evt => {
    setNumber(
      (countDots(evt.target.value + evt.key) == 0)
        ? evt.target.value
        : replaceDots(evt.target.value + evt.key)
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
