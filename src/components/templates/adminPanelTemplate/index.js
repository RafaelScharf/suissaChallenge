import React, { useState } from 'react';
import './style.css'

// import { Container } from './styles';

const AdminPanelTemplate =  (props) => {

  const children = props.children
  return (
    
    <>
      {
        React.Children.map(children, (child, i) => {
          //RENDERIZAR TODAS AS PARTES DO TEMPLATE, PASSAR QUATRO COMPONENTES 
          //COMO CHILD NA ORGEM HEADER -> NAVBAR -> BODY -> FOOTER
          console.log({child}, {i})
          if(i === 0)
            return <header>{child}</header>
          if(i === 1)
            return <navbar>{child}</navbar>
          if(i === 2)
            return <body>{child}</body>
          else 
            return <footer>{child}</footer>
        })
      }
    </>

  );
}

export default AdminPanelTemplate;