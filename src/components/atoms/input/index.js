import React, { useState } from 'react';
import { inputMask } from "./utils"




const Input = () => {

  const [number, setNumber] = useState();

  const handleChange = (evt) => {
    setNumber(inputMask(evt.target.value))
  }
  
  return (
    <div className="Input">
      
      <input
      value={number === 0 ? "" : number}
      onChange={handleChange}
      ></input>
    </div>
  );
}

export default Input;
