import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';


// Define your Material-UI theme

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
    fontWeight: 400, // This is equivalent to 'Raleway Regular'
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Raleway, sans-serif',
      fontWeight: 400, // This is equivalent to 'Raleway Regular'
    },
  },
},
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
