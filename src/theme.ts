'use client';

import { Roboto_Mono } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { yellow, green, grey, red, teal, blueGrey } from '@mui/material/colors';

const roboto_mono = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  },
  typography: {
    fontFamily: roboto_mono.style.fontFamily,
    h3: {
      '@media (max-width: 576px)': {
        fontSize: '1.5rem',
      }
    },
    h4: {
      fontSize: '1.6rem',
      '@media (min-width: 576px)': {
        fontSize: '2.4rem',
      },
    },
  },
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      contrastText: yellow[100]
    },
    secondary: {
      main: teal[600],
    },
    background: {
      default: blueGrey[100],
      paper: grey[100],
    },
    success: {
      main: green[200],
    },
    error: {
      main: red[200],
    },
  },
});

export default theme;
