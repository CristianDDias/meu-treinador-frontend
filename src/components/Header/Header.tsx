import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BackIcon from "@material-ui/icons/ArrowBack";

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
    <AppBar position="static" elevation={0}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={hideBackButton ? classes.hidden : classes.button}
          onClick={navigateBack}
        >
          <BackIcon />
        </IconButton>
        <Typography variant="h6" align="center" className={classes.title}>
          MEU TREINADOR
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
