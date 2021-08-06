import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    shadow: {
      border: string;
      card: string;
    };
  }
  interface ThemeOptions {
    shadow?: {
      border?: string;
      card?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#30cc99',
    },
    background: {
      default: '#f9f9f9',
    },
  },
  shadow: {
    border: '0px 0px 4px 1px rgba(0,0,0,0.1)',
    card: '0px 1px 4px 0px rgb(0,0,0,0.1)',
  },
});

// blue     1a91ff - 007cdc
// green    28b873 - 26d367 - 30cc99
// red      ff3d57 - ef8575
// orange   ff824c - ff9900
