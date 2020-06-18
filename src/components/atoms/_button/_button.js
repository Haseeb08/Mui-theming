import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  btn: {
    height: "3em",
    width: "3.46em",
    margin: "8px",
  },
  largeButton: {
    height: "2.9em",
    width: "7.5em",
    marginTop: "7px",
    marginBottom: "7px",
  },
  equalButton: {
    backgroundColor: myTheme.palette.myColor.color,
  },
}));

const CalcButton = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={
          (props.value === "AC" || props.value === "<="
            ? classes.largeButton
            : classes.btn) +
          " " +
          (props.value === "=" ? classes.equalButton : {})
        }
        color={props.color}
        size="medium"
        variant="contained"
        onClick={(event) => {
          event.preventDefault();
          props.onButtonClick(props.value);
        }}
      >
        <Typography variant="button"> {props.value}</Typography>
      </Button>
    </div>
  );
};
export default CalcButton;
