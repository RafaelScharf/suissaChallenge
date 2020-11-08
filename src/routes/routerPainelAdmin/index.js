import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import AdminPanelTemplate from './../../components/templates/adminPanelTemplate/index'

import Dashboard from './../../components/pages/dashboard/index'
import Header from './../../components/molecules/header/index'
import NavBar from './../../components/molecules/navbar/index'
import Body from './../../components/molecules/body/index'
import Footer from './../../components/molecules/footer/index'

import Calculator from './../../components/organisms/pages/calculator/index'


function RouterPainelAdmin() {
  return (

    
    
    <BrowserRouter>

     
      <AdminPanelTemplate>
          
        <Header />
        <NavBar />
        <Body>
          
          <Route path="/" exact component={Dashboard} /> 
          <Route path="/dashboard"  component={Dashboard} /> 
          <Route path="/calculator"  component={Calculator} /> 
    

          
          
        </Body>
        <Footer/>
      

    </AdminPanelTemplate>
    
    </BrowserRouter>
    
  );

  
}

export default RouterPainelAdmin;
