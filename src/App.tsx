import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { Header, Logo, Nav, NavbarContain, NavButton } from "components/Nav";
import { GroupImage25, Title  } from "components/SectionsPages";

function App() {
  return (
    <>
      <GlobalStyles />

      <Header>
        <NavbarContain>
          <Logo />
          <Nav />
          <NavButton />

        </NavbarContain>
      </Header>
      <Title />
      <GroupImage25 />



    </>
  );
}

export default App;
