import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

// Define your Material-UI theme



let theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
    fontWeight: 400,
  },
});

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    h6: {
      fontSize: '1rem',
      '@media  (max-width: 400px)': {
        fontSize: '1.0rem',
      },
      '@media (min-width: 401px) and (max-width: 600px)': {
        fontSize: '1rem',
      },

      '@media (min-width: 601px) and (max-width: 900px)': {
        fontSize: '1.2rem',
      },


      '@media (min-width: 901px) and (max-width: 1200px)': {
        fontSize: '1.2rem',
      },


      '@media (min-width: 1201px) and (max-width: 1536px)': {
        fontSize: '1.2rem',
      },

      '@media (min-width: 1537px) ': {
        fontSize: '1.2rem',
      },

    },
    h4: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '1.3rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.6rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: '1.7rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '1.8rem',
      },
    },

  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {

          [theme.breakpoints.up('xs')]: {
            height: '100vh',
          },
          [theme.breakpoints.up('sm')]: {
            height: '85vh',
          }, 
          [theme.breakpoints.up('md')]: {
            height: '75vh',
          },

          [theme.breakpoints.up('lg')]: {
            height: '109vh',
          },
          [theme.breakpoints.up('xl')]: {
            height: '100vh',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 400,
        },
      },
    },
  },
};


root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
