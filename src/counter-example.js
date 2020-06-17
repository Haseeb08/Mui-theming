import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { buttonTheme } from "./theme";

export default function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ThemeProvider theme={buttonTheme}>
        <Typography variant="body1">Hello count: {count}</Typography>

        <Button
          color="primary"
          size="medium"
          variant="contained"
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          +
        </Button>

        <Button
          color="secondary"
          size="medium"
          variant="contained"
          onClick={(e) => {
            setCount(count - 1);
          }}
        >
          -
        </Button>
      </ThemeProvider>
    </div>
  );
}
