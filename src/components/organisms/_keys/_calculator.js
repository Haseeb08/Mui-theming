import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../atoms/_title/_title";
import Input from "../../atoms/_input/_input";
import KeyPad from "../../molecules/_keypad/_keypad";

const useStyles = makeStyles((theme) => ({
  calcWrapper: {
    width: "auto",
    height: "auto",
    border: "2px solid green",
    boxShadow: "10px 10px 10px grey",
    backgroundColor: "#000000",
  },
}));

function Calculator() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleClick = (value) => {
    console.log("Value :", value);
    console.log("Input value:", inputValue);

    switch (value) {
      case "AC":
        setInputValue("");
        break;
      case "<=":
        var str = inputValue;
        var val = str.substring(0, str.length - 1);
        setInputValue(val);
        break;
      case "=":
        console.log("value :", inputValue);
        try {
          var ans = eval(inputValue);
        } catch (err) {
          var ans = "error";
        }
        console.log("ans:", ans);
        setInputValue(ans+"");
        break;
      default:
        setInputValue(inputValue + value);
        break;
    }
  };

  return (
    <div className={classes.calcWrapper}>
      <Title title={"MUI Calculator"} />  
      <hr style={{margin:0}}></hr> 
      <Input input={inputValue} />  
      <hr  style={{margin:0}}></hr>     
      <KeyPad handleClick={handleClick} />   
    </div>
  );
}

export default Calculator;
