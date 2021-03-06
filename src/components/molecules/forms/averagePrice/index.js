import React, { useState } from 'react';
import Input from '../../../atoms/input/index'
import Button from '../../../atoms/button/index'


const AvaragePrice = (props) => {

  const [entry1, setEntry1] = useState('')
  const [quantity1, setQuantity1] = useState('')
  const [entry2, setEntry2] = useState('')
  const [quantity2, setQuantity2] = useState('')
  const [result, setResult] = useState('')

  
  const mpSUM = ({entry1= 10000, quantity1= 2}, {entry2= 9000, quantity2= 1}) => (
    (entry1 * quantity1 + entry2 * quantity2) / 
    (quantity1 + quantity2)
  )

  const calculate =  ({entry1= 10000, quantity1= 2}, {entry2= 9000, quantity2= 1}) => {
    setResult(mpSUM({entry1, quantity1}, {entry2, quantity2}).toFixed(2))
  }

  return(

    <>
    <span className={props.className}>
    <h1>Preço Médio: <span class="avg-price">{result}</span></h1>

    <Input label="entry1 $" childHandleChange={(val) => setEntry1(Number(val))} />
    <Input label="quantity1" childHandleChange={(val) => setQuantity1(Number(val))} />
    <Input label="entry2 $" childHandleChange={(val) => setEntry2(Number(val))} />
    <Input label="quantity2" childHandleChange={(val) => setQuantity2(Number(val))} />
    <Button text="Calculate" onClick={() => calculate({entry1, quantity1}, {entry2, quantity2})} />
    </span>
    </>
    

  )

}

export default AvaragePrice;