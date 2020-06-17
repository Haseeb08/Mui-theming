import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import KeyPad from "../components/molecules/_keypad/_keypad";
import Title from "../components/atoms/_title/_title";
import Input from "../components/atoms/_input/_input";

const useStyles = makeStyles((theme) => ({
calcWrapper : {
    width: '400px',
    height: '594px',
    border: '2px solid green',
    boxShadow: '10px 1px 10px grey',
  },
  root : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  
  }
}));

function CalcPage() {
    const classes= useStyles();

    const [inputValue, setInputValue] = useState("");
    return (
      <div className={classes.root}>
        <div className={classes.calcWrapper}>
          <Title title={"MUI Calculator"} />
          <Input input={inputValue} />
          <KeyPad inputValue={inputValue} setInputValue={setInputValue} />
        </div>
      </div>
    );

  }
  
  export default CalcPage;
  