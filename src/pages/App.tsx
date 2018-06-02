import * as React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Router from "./Router";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router />
  </MuiThemeProvider>
);
export default App;
