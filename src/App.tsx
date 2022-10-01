import React from 'react';
import GlobalStyles from "./styles/global";
import Routes from "./router";
import {withTheme} from "./hoc";

function App() {
  return (
    <>
      {/*Styled component*/}
      <GlobalStyles/>
      {/*Routes*/}
      <Routes/>
    </>
  );
}

export default withTheme(App);
