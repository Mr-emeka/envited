import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme";

function withTheme<T>(Component: FC<any>) {
  return (props: T) => (
    <ThemeProvider theme={defaultTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
}

export { withTheme };
