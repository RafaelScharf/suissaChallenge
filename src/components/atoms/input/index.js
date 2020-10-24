import React, { useState } from 'react';
import { acceptOnlyNumber, maskFloat, replaceLetter } from "./utils"


const Input = () => {

  const [number, setNumber] = useState();

  const handleChangeKeyPress = evt => {
    
    
    
  }

  const handleChangeKeyUp = evt => {
    setNumber(
      acceptOnlyNumber(evt.key)
      ? maskFloat(evt.target.value + evt.key)
      : evt.target.value
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
