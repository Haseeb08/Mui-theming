import React from "react";
import { Typography } from "@material-ui/core";

function Title(props) {
  return <Typography variant="h3">{props.title}</Typography>;
}

Title.defaultProps = {
  title: "My Calculator",
};
export default Title;
