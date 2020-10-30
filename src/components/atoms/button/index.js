import React, { useState } from 'react';

const Button = (props) => {

  return(

    <>
    <button
    onClick={props.onClick}
    >{props.text}</button>
    </>
    

  )

}

export default Button;