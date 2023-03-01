import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import  Button  from './components/Button';
import {  Header, Logo, Nav, NavbarContain }  from 'components/Nav';
//import { Navbar } from './components';
//import { Header } from 'styles/styles';

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header>
        <NavbarContain>
        <Logo />
         <Nav />
         </NavbarContain>
      </Header>
      
      <Button text="Get a demo" variant='secondary' />
    </>
  );
}

export default App;
