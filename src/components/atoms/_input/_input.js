import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  input: {
    height: "3.4em",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.4em",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: theme.spacing(1),
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
