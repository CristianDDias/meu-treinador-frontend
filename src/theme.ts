import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    softShadow: string;
    softShadowUp: string;
  }
  interface ThemeOptions {
    softShadow?: string;
    softShadowUp?: string;
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff824c",
    },
  },
  softShadow: "0 1px 4px 0 rgba(0,0,0,0.25)",
  softShadowUp: "0 0px 4px 0 rgba(0,0,0,0.25)",
});

// blue     1a91ff - 007cdc
// green    28b873 - 26d367
// red      ff3d57
// orange   ff824c - ff9900
