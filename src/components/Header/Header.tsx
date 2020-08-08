import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BackIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  title: {
    width: "100%",
    color: "#ffffff",
  },
  button: {
    position: "absolute",
    color: "#ffffff",
  },
  hidden: {
    display: "none",
  },
});

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const navigateBack = () => {
    history.goBack();
  };

  const hideBackButton = location.pathname.split("/")[2] ? false : true;

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar variant="dense">
        <IconButton
          className={hideBackButton ? classes.hidden : classes.button}
          edge="start"
          onClick={navigateBack}
        >
          <BackIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" align="center">
          MEU TREINADOR
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
