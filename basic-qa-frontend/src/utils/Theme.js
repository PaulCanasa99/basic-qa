import { createMuiTheme } from '@material-ui/core';

const THEME = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif;",
    h4: {
      fontSize: 36,
      color: '#FFFFFF',
    },
    h5: {
      fontSize: 24,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: 18,
      color: '#353535',
    },
    body2: {
      fontSize: 16,
    },
    button: {
      textTransform: 'none',
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: '#284B63',
    },
    secondary: {
      main: '#353535',
    },
  },
});

// THEME.typography.h4 = {
//   [THEME.breakpoints.down('md')]: {
//     fontSize: 22,
//   },
// };
// THEME.typography.h5 = {
//   [THEME.breakpoints.down('md')]: {
//     fontSize: 16,
//   },
// };
// THEME.typography.body1 = {
//   [THEME.breakpoints.down('md')]: {
//     fontSize: 14,
//   },
// };
// THEME.typography.body2 = {
//   [THEME.breakpoints.down('md')]: {
//     fontSize: 12,
//   },
// };
// THEME.typography.button = {
//   [THEME.breakpoints.down('md')]: {
//     fontSize: 14,
//   },
// };
export default THEME;
