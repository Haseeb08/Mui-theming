import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Calculator from "../_components/organisms/_calculator/_calculator";
import {myTheme} from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: myTheme.palette.background.default,
  },
}));

function CalcPage() {
  const classes = useStyles();
  return (
    <div data-testid="calc-page" className={classes.root}>
      <Calculator />
    </div>
  );
}

export default CalcPage;
