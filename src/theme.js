import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";


export const myTheme = createMuiTheme({
  
    palette: {
    primary: {
      //   main: purple[500],   Colors need to be imported
      main: "#ff9800", // We can directly give colors in # without importing.
    },
    secondary: {
      main: green[500],
    },
    myColor: {
        color: '#9bc6c0',
    },
    status : {
        danger: purple[500],
    },
     error: {
        main: '#000',
        light: '#000',
        dark: '#000',
        contrastText: '#000',
      },
      divider: '#000',
      action: {
        active: '#000',
        hover: '#000',
        selected: '#000',
        disabled: '#000',
        disabledBackground: '#000',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ff9800',
        disabled: '#000',
        hint: '#000',
        icon: '#000',
      },
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      background: {
        default: '#cde2cd',
        paper: '#000',
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
      color: "#ffffff",
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




