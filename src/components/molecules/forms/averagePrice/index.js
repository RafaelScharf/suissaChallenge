import React, { useState } from 'react';
import Input from '../../../atoms/input/index'
import Button from '../../../atoms/button/index'


const AvaragePrice = () => {

  const [leverage, setLeverage] = useState('')
  const [entry, setEntry] = useState('')
  const [exit, setExit] = useState('')
  const [quantity, setQuantity] = useState('')
  const [result, setResult] = useState('')

  const calculate = (leverage, entry, exit) => {

    setResult(leverage + entry + exit)


  }

  return(

    <>
    <Input label="leverage" childHandleChange={(val) => setLeverage(val)}/>
    <Input label="entry $" childHandleChange={(val) => setEntry(val)} />
    <Input label="exit $" childHandleChange={(val) => setExit(val)} />
    <Input label="quantity" childHandleChange={(val) => setLeverage(val)} />
    <Button text="Calculate" onClick={() => calculate(leverage, entry, exit)} />
    {result}
    </>
    

  )

}

export default AvaragePrice;