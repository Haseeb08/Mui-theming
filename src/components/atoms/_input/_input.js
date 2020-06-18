import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  input: {
    height: "2.1em",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.4em",
    backgroundColor: "#000000",
    paddingRight: "10px",
    color: myTheme.palette.text.primary,
  },
}));

function Input(props) {
  const classes = useStyles();
  return <div className={classes.input}>{props.input}</div>;
}
Input.defaultProps = {
  input: "47382",
};

export default Input;
