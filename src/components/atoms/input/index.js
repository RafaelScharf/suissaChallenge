import React from 'react';

function Input() {

  const onlyNumbersRegex = /\d/
  const dotRegex = /\./g
  const isNumberOrDot = (val) => onlyNumbersRegex.test(val) || dotRegex.test(val)
  const countDots = (val) => (val.match(dotRegex) || []).length
  const replaceDots = (val) => val.replace('.', '').replaceAll('.', '').replace('', '.')

  const maskFloat = (evt, input) => 
    evt.target.value = replaceDots(input.value)

  const acceptOnlyNumber = (input) => 
    input.addEventListener("keypress", (evt) => 
      (isNumberOrDot(evt.key)) 
        ? true 
        : evt.preventDefault())

  const maskInputToFloat = (input) => 
    input.addEventListener("keyup", (evt) =>
      (countDots(input.value) == 0) 
        ? true
        : maskFloat(evt, input))

  const maskInput = (input) => {
    acceptOnlyNumber(input)
    maskInputToFloat(input)
  }

  return (
    <div className="Input">
  
      <input></input>
     
    </div>
  );
}

export default Input;
