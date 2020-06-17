import React from "react";
import Button from "../../atoms/_button/_button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  keyPad: {
    display: "flex",
    flexDirection: "column",
  },

  keyRow: {
    display: "flex",
    flexDirection: "row",
    flex: '1',
    width: '100%',
   
  },

}));

function KeyPad(props) {
  const classes = useStyles();

  return (
    <div className={classes.keyPad}>
        <div className={classes.keyRow}>
        <Button value={"AC"} inputValue={props.inputValue} setInputValue={props.setInputValue} />
        <Button value={"<="} inputValue={props.inputValue} setInputValue={props.setInputValue} />
      </div>
      <div className={classes.keyRow}>
        <Button value={9} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={8} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={7} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={"+"} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"secondary"} />
      </div>
      <div className={classes.keyRow}>
        <Button value={6} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={5} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={4} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={"-"} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"secondary"} />
      </div>
      <div className={classes.keyRow}>
        <Button value={3} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={2} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={1} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={"*"} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"secondary"} />
      </div>
      <div className={classes.keyRow}>
        <Button value={0} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={"."} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={"="} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"primary"} />
        <Button value={"/"} inputValue={props.inputValue} setInputValue={props.setInputValue} color={"secondary"} />
      </div>
    </div>

  
  );
}
export default KeyPad;
