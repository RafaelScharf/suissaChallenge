import React, { useState } from 'react';
import Input from '../../../atoms/input/index'
import Button from '../../../atoms/button/index'


const AvaragePrice = () => {

  const [entry1, setEntry1] = useState('')
  const [quantity1, setQuantity1] = useState('')
  const [entry2, setEntry2] = useState('')
  const [quantity2, setQuantity2] = useState('')
  const [result, setResult] = useState('')

  
  const mpSUM = ({entry1= 10000, quantity1= 2}, {entry2= 9000, quantity2= 1}) => (
    (Number(entry1 * quantity1) + Number(entry2 * quantity2)) / 
    (Number(quantity1) + Number(quantity2))
  )

  const calculate =  ({entry1= 10000, quantity1= 2}, {entry2= 9000, quantity2= 1}) => {
    setResult(mpSUM({entry1, quantity1}, {entry2, quantity2}))
  }

  return(

    <>
    <Input label="entry1 $" childHandleChange={(val) => setEntry1(val)} />
    <Input label="quantity1" childHandleChange={(val) => setQuantity1(val)} />
    <Input label="entry2 $" childHandleChange={(val) => setEntry2(val)} />
    <Input label="quantity2" childHandleChange={(val) => setQuantity2(val)} />
    <Button text="Calculate" onClick={() => calculate({entry1, quantity1}, {entry2, quantity2})} />
    {result}
    </>
    

  )

}

export default AvaragePrice;