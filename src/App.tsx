import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { Navigation } from "components";
import { Section1, Section2 } from "components/SectionsPages";

function App() {
  return (
    <>
      <GlobalStyles />

      <Navigation />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
