import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    width: "100%",
    color: "#ffffff",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar variant="dense">
        <Typography variant="h6" align="center" className={classes.title}>
          MEU TREINADOR
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
