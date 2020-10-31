import React, { useState } from 'react';

const Button = (props) => {

  return(

    <>
    <button
      onClick={props.onClick}
      className={props.className}
      data-name={props.dataName}
      href={props.href}
    >
      {props.text}
    </button>
    </>
   

  )

}

export default Button;