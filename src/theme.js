import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const buttonTheme = createMuiTheme({
  palette: {
    primary: {
      //   main: purple[500],   Colors need to be imported
      main: "#e57373", // We can directly give colors in # without importing.
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    body1: {
      color: "purple",
      fontWeight: "lighter",
      fontSize: "1.4em",
      fontStyle: "bold",
      fontFamily: "poppins",
    },
    h3: {
      fontSize: "2.9em",
      textAlign: "center",
      color: "red",
      fontStyle: "bold",
      fontFamily: "poppins",
    },
    button: {
      color: "purple",
      fontWeight: "lighter",
      fontSize: "1.4em",
      fontStyle: "bold",
      fontFamily: "poppins",
    },
  },
});

export const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    body1: {
      color: "blue",
      fontSize: 20,
      fontStyle: "italic",
      fontFamily: "poppins",
      fontWeight: "600",
    },
    subtitle1: {
      fontSize: 12,
    },
    button: {
      fontStyle: "italic",
    },
  },
});
