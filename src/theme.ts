import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    border: string;
  }
  interface ThemeOptions {
    border?: string;
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#30cc99',
    },
  },
  border: '1px solid rgba(0, 0, 0, 0.12)',
});

// blue     1a91ff - 007cdc
// green    28b873 - 26d367 - 30cc99
// red      ff3d57 - ef8575
// orange   ff824c - ff9900
