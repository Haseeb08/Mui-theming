import React from "react";
import "./App.css";
import CalcPage from "./pages/_calc";
import { ThemeProvider } from "@material-ui/core";
import { myTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <CalcPage />
    </ThemeProvider>
  );
}

export default App;
