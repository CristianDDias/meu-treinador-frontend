import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
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
      main: "#ff824c",
    },
  },
  border: "1px solid rgba(0, 0, 0, 0.12)",
});

// blue     1a91ff - 007cdc
// green    28b873 - 26d367
// red      ff3d57
// orange   ff824c - ff9900
