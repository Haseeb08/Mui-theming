import React from 'react';
import { Typography, ThemeProvider } from '@material-ui/core';
import { buttonTheme } from '../../../theme';

function Title(props) {

return(
    <ThemeProvider theme={buttonTheme}>
<Typography variant="h3">
   { props.title }
</Typography>
</ThemeProvider>
);
}

Title.defaultProps={
    title: "My Calculator",
}
export default Title;