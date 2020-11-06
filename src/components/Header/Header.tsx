import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import { useStyles } from './Header.jss';

export const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const navigateBack = (): void => {
    history.goBack();
  };

  const hideBackButton = !location.pathname.split('/')[2];

  return (
    <AppBar className={classes.header} position="fixed">
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
