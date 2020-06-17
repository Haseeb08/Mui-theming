import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { buttonTheme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  btn: {
    height: "4em",
    width: "4.46em",
  },
  largeButton: {
    height: "4em",
    width: "8.9em",
  },
}));

const CalcButton = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    console.log(props.value);

    switch (props.value) {
      case "AC":
        props.setInputValue("");
        break;
      case "<=":
        var str = props.inputValue;
        var val = str.substring(0, str.length - 1);
        props.setInputValue(val);
        break;
      case "=":
        console.log("value :", props.inputValue);
        try {
        var ans = eval(props.inputValue);
        }
        catch(err){
            var ans ="error";
        } 
        console.log("ans:", ans);
        props.setInputValue(ans);
        break;
      default:
        props.setInputValue(props.inputValue + props.value);
    }
  };

  return (
    <div>
      <ThemeProvider theme={buttonTheme}>
        <Button
          className={
            props.value === "AC" || props.value === "<="
              ? classes.largeButton
              : classes.btn
          }
          color={props.color}
          size="medium"
          variant="contained"
          onClick={handleClick}
        >
          <Typography variant="button"> {props.value}</Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
};
export default CalcButton;
