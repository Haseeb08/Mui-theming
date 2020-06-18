import React from "react";
import Button from "../../atoms/_button/_button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  keyPad: {
    display: "flex",
    flexDirection: "column",
    margin: "7px",
  },

  keyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: "1",
    width: "100%",
  },

}));

function KeyPad(props) {
  const classes = useStyles();

  const onButtonClick = (value) => {
    props.handleClick(value);
  };

  return (
    <div className={classes.keyPad}>
      <div className={classes.keyRow}>
        <Button value={"AC"} onButtonClick={onButtonClick} />
        <Button value={"<="} onButtonClick={onButtonClick} />
      </div>
      <div className={classes.keyRow}>
        <Button value={9} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={8} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={7} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={"+"} color={"secondary"} onButtonClick={onButtonClick} />
      </div>
      <div className={classes.keyRow}>
        <Button value={6} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={5} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={4} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={"-"} color={"secondary"} onButtonClick={onButtonClick} />
      </div>
      <div className={classes.keyRow}>
        <Button value={3} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={2} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={1} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={"*"} color={"secondary"} onButtonClick={onButtonClick} />
      </div>
      <div className={classes.keyRow}>
        <Button value={0} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={"."} color={"primary"} onButtonClick={onButtonClick} />
        <Button value={"="} onButtonClick={onButtonClick} />
        <Button value={"/"} color={"secondary"} onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}
export default KeyPad;
