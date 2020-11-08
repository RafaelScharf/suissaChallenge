import React, { useState } from 'react';

const Body =  (props) => {

const children = props.children;

  return (
    <>
     
      <div>
        {
          React.Children.map(children, (child, i) => {
            //AQUI VAI PASSAR A ROTA PRA EXIBIR NO BODY
            return child;
          })
        }
      </div>

    </>

  );
}

export default Body;